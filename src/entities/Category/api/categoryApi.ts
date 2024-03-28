import { rtkApi } from '@/shared/api/rtkApi';
import { Category } from '../model/types/category';

const categoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<Category[], null>({
            query: () => ({
                url: '/categories',
            }),
        }),
    }),
});

export const useCategories = categoryApi.useGetCategoriesQuery;
