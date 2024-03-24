import React, { type FC } from 'react'

import { classNames } from 'shared/lib/classNames'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
        </div>
    )
}

export default PageLoader
