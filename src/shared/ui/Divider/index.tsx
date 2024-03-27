import React, { FC, HTMLAttributes } from 'react';

import cls from './Divider.module.scss';

import { classNames } from '@/shared/lib/classNames';

type MarginType = '4' | '8' | '16';

const gapClasses: Record<MarginType, string> = {
    4: cls.margin4,
    8: cls.margin8,
    16: cls.margin16,
};

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    className?: string;
    color?: 'gray';
    margin?: MarginType;
}

const Divider: FC<DividerProps> = ({
    className,
    color = 'gray',
    margin = '4',
}) => {
    const classes = [className, cls[color], gapClasses[margin]];

    return <hr className={classNames(cls.Divider, {}, classes)} />;
};

export default Divider;
