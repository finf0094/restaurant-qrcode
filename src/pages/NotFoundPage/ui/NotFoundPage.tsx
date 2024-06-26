import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return <div className={classNames(cls.notFound, {}, [className])}>{t('Страница не найдена!')}</div>;
};

export default NotFoundPage;
