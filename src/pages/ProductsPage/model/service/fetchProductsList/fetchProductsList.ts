import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { Product } from '@/entities/Product';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
    getProductsPageCategory,
    getProductsPageLimit,
    getProductsPageNum,
    getProductsPageSearch,
} from '../../selectors/productsPageSelectors';

interface FetchProductsListProps {
    replace?: boolean;
}

export const fetchProductsList = createAsyncThunk<
    Product[],
    FetchProductsListProps,
    ThunkConfig<string>
>('productsPage/fetchProductsList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getProductsPageLimit(getState());
    const search = getProductsPageSearch(getState());
    const page = getProductsPageNum(getState());
    const category = getProductsPageCategory(getState());

    try {
        addQueryParams({
            category: category?.name,
        });
        const response = await extra.api.get<Product[]>('/products', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                'category.id': category?.id,
                q: search,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
