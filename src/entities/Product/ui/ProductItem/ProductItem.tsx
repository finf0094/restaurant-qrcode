import React, { memo } from 'react';

import { AppImage } from '@/shared/ui/AppImage';
import Typography from '@/shared/ui/Typography';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './ProductItem.module.scss';
import { Product } from '../../model/types/product';

interface ProductItemProps {
    className: string;
    item: Product;
}

export const ProductItem: React.FC<ProductItemProps> = memo((props) => {
    const { item, className } = props;

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={index < item.rating ? cls.filledStar : cls.emptyStar}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}★
            </span>
        ));
    };

    return (
        <HStack
            className={cls.productItem}
            align="center"
            gap="8"
            max
            justify="between"
        >
            <HStack gap="16">
                <AppImage
                    className={cls.productImage}
                    src={item.imageUrl}
                    alt={item.name}
                />
                <VStack gap="4">
                    <Typography size="l" fw="medium">
                        {item.name}
                    </Typography>
                    <Typography
                        size="m"
                        color="gray"
                    >{`$${item.price}`}
                    </Typography>
                </VStack>
            </HStack>
            <div className={cls.rating}>{renderStars()}</div>
        </HStack>
    );
});
