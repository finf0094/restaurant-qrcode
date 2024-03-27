import React, { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ProductItem.module.scss';

export const ProductItemSkeleton = memo(() => {
    return (
        <HStack className={cls.foodItem} align="center" gap="8">
            <Skeleton
                className={cls.foodImage}
                width="50px"
                height="50px"
                border="8px"
            />
            <VStack gap="4">
                <Skeleton width="70%" height="20px" />
                <Skeleton width="50%" height="20px" />
                <HStack gap="4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} width="10px" height="10px" />
                    ))}
                </HStack>
            </VStack>
        </HStack>
    );
});
