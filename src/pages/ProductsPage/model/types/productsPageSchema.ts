import { EntityState } from '@reduxjs/toolkit';
import { Product } from '@/entities/Product';
import { Category } from '@/entities/Category';

export interface ProductsPageSchema extends EntityState<Product, number> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    category: Category;
    search: string;

    _inited: boolean;
}