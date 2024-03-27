import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './ProductList.module.scss';
import { useProducts } from '../../api/productApi';
import { ProductItem } from '@/entities/Product/ui/ProductItem/ProductItem';
import { ProductItemSkeleton } from '@/entities/Product/ui/ProductItem/ProductItemSkeleton';

interface ProductListProps {
    className?: string;
}

export const ProductList = memo((props: ProductListProps) => {
    const { className } = props;
    const { data, isLoading } = useProducts(null);

    if (isLoading) {
        return <ProductItemSkeleton />;
    }

    if (!data) return null;

    return data.map((product) => (
        <ProductItem
            className={classNames(cls.Product, {}, [className])}
            item={product}
        />
    ));
});
