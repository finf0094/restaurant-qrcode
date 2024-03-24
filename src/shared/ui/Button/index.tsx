import {
    type ReactNode, type FC, ButtonHTMLAttributes, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'outlined' | 'clear' | 'fill';
    color?: 'primary' | 'success' | 'error' | 'dark' | 'white';
    size?: 'small' | 'medium' | 'large';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = memo(({
    className,
    variant = 'fill',
    color = 'primary',
    size = 'medium',
    startIcon,
    endIcon,
    children,
    disabled,
    ...otherProps
}) => (
    <button
        type="button"
        disabled={disabled}
        className={classNames(cls.Button, {}, [className, cls[variant], cls[color], cls[size]])}
        {...otherProps}
    >
        {startIcon && <span className={cls.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={cls.endIcon}>{endIcon}</span>}
    </button>
));

export default Button;
