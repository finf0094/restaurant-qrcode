import type { AppRoutesProps } from '@/shared/types/router';
import {
    AppRoutes, getRouteBasket,
    getRouteMain, getRouteQRCode,
} from '@/shared/const/router';

import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.BASKET]: {
        path: getRouteBasket(),
        element: <MainPage />,
    },
    [AppRoutes.QR_CODE]: {
        path: getRouteQRCode(),
        element: <MainPage />,
    },


    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
