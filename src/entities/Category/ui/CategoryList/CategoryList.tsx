import React, {FC} from 'react';

import {classNames} from "@/shared/lib/classNames"

import cls from './CategoryList.module.scss';
import { VStack } from '@/shared/ui/Stack';
import Typography from '@/shared/ui/Typography';
import { useTranslation } from 'react-i18next';

interface CategoryListProps {
    className?: string;
}

export const CategoryList: FC<CategoryListProps> = ({className}) => {
    const {t} = useTranslation();
    return (
        <VStack className={classNames(cls.CategoryList, {}, [className])}>
            <Typography size="l" fw="bold">{t('Browse by')}</Typography>
        </VStack>
    );
};