import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ProductList } from '@/entities/Product';
import { getProducts } from '../../model/slice/productsPageSlice';
import {
    getProductsPageError,
    getProductsPageIsLoading,
} from '../../model/selectors/productsPageSelectors';
import Typography from '@/shared/ui/Typography';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ProductInfinityList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const products = useSelector(getProducts.selectAll);
    const isLoading = useSelector(getProductsPageIsLoading);
    const error = useSelector(getProductsPageError);
    const { t } = useTranslation();

    if (error) {
        return <Typography color="primary">{t('Error loading products')}</Typography>;
    }

    return (
        <ProductList
            isLoading={isLoading}
            products={products}
            className={className}
        />
    );
});
