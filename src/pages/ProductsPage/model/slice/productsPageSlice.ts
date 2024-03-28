import {
    createEntityAdapter,
    createSlice,
    EntityAdapter,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { ProductsPageSchema } from '../types/productsPageSchema';
import type { Product } from '@/entities/Product';
import { fetchProductsList } from '../service/fetchProductsList/fetchProductsList';
import { EntityAdapterOptions } from '@reduxjs/toolkit/dist/entities/models';
import { Category } from '@/entities/Category';

const productsAdapter = createEntityAdapter<Product>({
    selectId: (product: Product) => product.id,
} as EntityAdapterOptions<Product, number>);

export const getProducts = productsAdapter.getSelectors<StateSchema>(
    (state) => state.productsPage || productsAdapter.getInitialState(),
);

const productsPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: productsAdapter.getInitialState<ProductsPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        search: '',
        category: { id: 1, name: 'ALL' },
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setCategory: (state, action: PayloadAction<Category>) => {
            state.category = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    productsAdapter.removeAll(state);
                }
            })
            .addCase(fetchProductsList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    productsAdapter.setAll(state, action.payload);
                } else {
                    productsAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchProductsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: productsPageReducer, actions: productsPageActions } =
    productsPageSlice;
