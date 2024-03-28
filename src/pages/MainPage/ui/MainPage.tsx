import { type FC } from 'react';

import { CategoryList } from '@/entities/Category';
import { ProductList } from '@/entities/Product';

import { Page } from '@/widgets/Page/ui/Page';

const MainPage: FC = () => {
    return (
        <Page>
            <CategoryList />
        </Page>
    );
};
export default MainPage;
