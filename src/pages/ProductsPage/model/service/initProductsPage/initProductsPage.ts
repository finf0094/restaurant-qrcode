import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getProductsPageInited } from '../../selectors/productsPageSelectors';
import { productsPageActions } from '../../slice/productsPageSlice';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';

export const initProductsPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('productsPage/initProductsPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getProductsPageInited(getState());

    if (!inited) {
        const searchFromUrl = searchParams.get('search') as string;

        if (searchFromUrl) {
            dispatch(productsPageActions.setSearch(searchFromUrl));
        }

        dispatch(productsPageActions.initState());
        dispatch(fetchProductsList({}));
    }
});
