import React, { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './ProductItem.module.scss';

interface ProductItemSkeletonProps {
    className?: string;
}

export const ProductItemSkeleton: React.FC<ProductItemSkeletonProps> = memo(({ className }) => {
    return (
        <HStack
            className={cls.productItem}
            align='center'
            gap='8'
            max
            justify='between'
        >
            <HStack gap='16'>
                <Skeleton
                    className={cls.productImage}
                    height='80px'
                    width='80px'
                    border='8px'
                />
                <VStack gap='4'>
                    <Skeleton
                        height='18px'
                        width='103px'
                    />
                    <Skeleton
                        height='16px'
                        width='25px'
                    />
                </VStack>
            </HStack>
            <div className={cls.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        height='17px'
                        width='17px'
                        className={cls.emptyStar}
                    />
                ))}
            </div>
        </HStack>
    );
});