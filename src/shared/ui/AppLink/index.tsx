import React, { FC, memo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames';

interface AppLinkProps extends NavLinkProps {
    className?: string;
    children: React.ReactNode;
    variant?: 'primary';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        variant = 'primary',
        children,
        startIcon,
        endIcon,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.AppLink, { [cls.active]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {startIcon && <span className={cls.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={cls.endIcon}>{endIcon}</span>}
        </NavLink>
    );
});

export default AppLink;
