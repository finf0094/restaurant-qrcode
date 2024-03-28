import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page';

import { ProductInfinityList } from '../ProductInfinityList/ProductInfinityList';
import { fetchNextProductsPage } from '../../model/service/fetchNextProductsPage/fetchNextProductsPage';
import { initProductsPage } from '../../model/service/initProductsPage/initProductsPage';
import { productsPageReducer } from '../../model/slice/productsPageSlice';

import cls from './ProductsPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    productsPage: productsPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextProductsPage());
    }, [dispatch]);

    useEffect(() => {
        dispatch(initProductsPage(searchParams));
    });

    const content = (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ProductsPage, {}, [className])}
        >
            <ProductInfinityList />
        </Page>
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
