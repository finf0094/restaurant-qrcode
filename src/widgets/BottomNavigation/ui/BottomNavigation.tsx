import { memo } from 'react';

import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { getRouteBasket, getRouteMain } from '@/shared/const/router';

import cls from './BottomNavigation.module.scss';

import HomeIcon from '@/shared/assets/icons/home.svg';
import BasketIcon from '@/shared/assets/icons/basket.svg';
import AppLink from '@/shared/ui/AppLink';

const BottomNavigation = memo(() => {
    return (
        <HStack className={cls.BottomNavigation} max justify="around">
            <AppLink to={getRouteMain()}>
                <Icon Svg={HomeIcon} />
            </AppLink>
            <AppLink to={getRouteBasket()}>
                <Icon Svg={BasketIcon} />
            </AppLink>
        </HStack>
    );
});

export default BottomNavigation;
