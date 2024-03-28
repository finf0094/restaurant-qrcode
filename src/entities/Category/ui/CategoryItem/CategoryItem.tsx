import { memo, useCallback } from 'react';

import cls from './Tabs.module.scss';

import { classNames } from '@/shared/lib/classNames';
import { Category } from '@/entities/Category';

export interface CategoryItemProps {
    className: string;
    onClick: (Category: Category) => void;
    category: Category;
    active: boolean;
}

export const CategoryItem = memo((props: CategoryItemProps) => {
    const { className, onClick, category, active } = props;

    const clickHandle = useCallback((tab: Category) => onClick(tab), [onClick]);

    return (
        <div
            key={category.id}
            className={classNames(
                cls.CategoryItem,
                {
                    [cls.active]: active,
                },
                [className],
            )}
            onClick={() => clickHandle(category)}
        >
            {category.name}
        </div>
    );
});
