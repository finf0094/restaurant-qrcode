import type { AppRoutesProps } from 'shared/types/router';
import {
    AppRoutes,
    getRouteMain,
} from 'shared/const/router';

import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },

    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
