import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import cls from './CategoryList.module.scss';

import { HStack, VStack } from '@/shared/ui/Stack';
import Typography from '@/shared/ui/Typography';
import { Category } from '@/entities/Category';
import { CategoryItem } from '@/entities/Category/ui/CategoryItem/CategoryItem';

interface CategoryListProps {
    className?: string;
    categories: Category[];
}

export const CategoryList: FC<CategoryListProps> = memo(
    ({ className, categories }) => {
        const { t } = useTranslation();
        return (
            <VStack className={classNames(cls.CategoryList, {}, [className])}>
                <Typography size="l" fw="bold">
                    {t('Browse by')}
                </Typography>
                <HStack>
                    {categories.map((category) => (
                        <CategoryItem
                            category={category}
                            active={false}
                            onClick={() => console.log('click category')}
                        />
                    ))}
                </HStack>
            </VStack>
        );
    },
);
