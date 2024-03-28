import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import Typography from '@/shared/ui/Typography';
import { VStack } from '@/shared/ui/Stack';

import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemSkeleton } from '../ProductItem/ProductItemSkeleton';

import cls from './ProductList.module.scss';
import { Product } from '@/entities/Product';

interface ProductListProps {
    className?: string;
    isLoading: boolean;
    products: Product[];
}

export const getProductListSkeleton = (count = 9) => (
    <VStack>
        {Array.from({ length: count }, (_, index) => (
            <ProductItemSkeleton key={index} />
        ))}
    </VStack>
);

export const ProductList = memo((props: ProductListProps) => {
    const { className, isLoading, products } = props;
    const { t } = useTranslation('ProductList');

    return (
        <VStack className={classNames(cls.ProductList)} gap="8">
            <Typography size="l" fw="bold">
                {t('Popular Foods')}
            </Typography>
            {products.map((product) => (
                <ProductItem
                    className={classNames('', {}, [className])}
                    item={product}
                    key={product.id}
                />
            ))}
            {isLoading && getProductListSkeleton()}
        </VStack>
    );
});
