import React, { type FC } from 'react';

import { classNames } from '@/shared/lib/classNames';

import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string
}

const Spinner: FC<SpinnerProps> = ({ className }) => (
    <div className={classNames(cls.loader, {}, [className])} />
);

export default Spinner;
