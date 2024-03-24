import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = (): void => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>

        </div>
    );
};

export default ErrorPage;
