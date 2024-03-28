import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import {
    getProductsPageHasMore,
    getProductsPageIsLoading,
    getProductsPageNum,
} from '../../selectors/productsPageSelectors';
import { productsPageActions } from '../../slice/productsPageSlice';
import { fetchProductsList } from '../fetchProductsList/fetchProductsList';


export const fetchNextProductsPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getProductsPageHasMore(getState());
    const page = getProductsPageNum(getState());
    const isLoading = getProductsPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(productsPageActions.setPage(page + 1));
        dispatch(fetchProductsList({}));
    }
});
