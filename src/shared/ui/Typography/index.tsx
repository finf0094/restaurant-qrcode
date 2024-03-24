import React, {
    ReactNode, CSSProperties, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Typography.module.scss';

interface TypographyProps {
    component?: keyof React.ReactHTML
    size?: 's' | 'm' | 'l' | 'xl'
    fw?: 'regular' | 'medium' | 'bold' | 'semibold'
    color?: 'primary' | 'success' | 'error' | 'dark' | 'white'
    className?: string
    style?: CSSProperties
    children: ReactNode
}

const Typography = memo((props: TypographyProps) => {
    const {
        component: Component = 'div',
        size = 'm',
        fw = 'regular',
        color = 'dark',
        className,
        style,
        children,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[size]]: true,
        [cls[fw]]: true,
        [cls[color]]: true,
    };

    return (
        <Component className={classNames(cls.typography, mods, [className])} {...otherProps} style={style}>
            {children}
        </Component>
    );
});

export default Typography;
