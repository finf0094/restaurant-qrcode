import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames'

import cls from './Header.module.scss'

interface NavbarProps {
    className?: string
}

const Header: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('header')

    return (
        <div className={classNames(cls.header, {}, [className])}>

        </div>
    )
}

export default Header
