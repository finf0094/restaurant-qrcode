import { StateSchema } from '@/app/providers/store';

export const getProductsPageIsLoading = (state: StateSchema) =>
    state.productsPage?.isLoading || false;
export const getProductsPageError = (state: StateSchema) =>
    state.productsPage?.error;
export const getProductsPageNum = (state: StateSchema) =>
    state.productsPage?.page || 1;
export const getProductsPageLimit = (state: StateSchema) =>
    state.productsPage?.limit || 9;
export const getProductsPageHasMore = (state: StateSchema) =>
    state.productsPage?.hasMore;
export const getProductsPageInited = (state: StateSchema) =>
    state.productsPage?._inited;
export const getProductsPageSearch = (state: StateSchema) =>
    state.productsPage?.search ?? '';
export const getProductsPageCategory = (state: StateSchema) =>
    state.productsPage?.category ?? { id: 1, name: 'ALL' };
