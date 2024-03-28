import type { AppRoutesProps } from '@/shared/types/router';
import {
    AppRoutes,
    getRouteBasket,
    getRouteMain,
    getRouteProducts,
    getRouteQRCode,
} from '@/shared/const/router';

// pages
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductsPage } from '@/pages/ProductsPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.QR_CODE]: {
        path: getRouteQRCode(),
        element: <MainPage />,
    },
    [AppRoutes.PRODUCTS]: {
        path: getRouteProducts(),
        element: <ProductsPage />,
    },
    [AppRoutes.BASKET]: {
        path: getRouteBasket(),
        element: <MainPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
