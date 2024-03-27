export enum AppRoutes {
    MAIN = 'main',
    QR_CODE = "qr-code",
    BASKET = "basket",

    // LAST
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteQRCode = () => '/qr-code'
export const getRouteBasket = () => '/basket'
