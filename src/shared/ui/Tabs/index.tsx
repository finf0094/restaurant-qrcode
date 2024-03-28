import { memo, ReactNode, useCallback } from 'react';

import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

import { classNames } from '@/shared/lib/classNames';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value, direction = 'row' } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => onTabClick(tab),
        [onTabClick],
    );

    return (
        <Flex
            direction={direction}
            gap="16"
            align="start"
            justify="around"
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map((tab) => (
                <div
                    key={tab.value}
                    className={classNames(cls.Tab, {
                        [cls.active]: tab.value === value,
                    })}
                    onClick={() => clickHandle(tab)}
                >
                    {tab.content}
                </div>
            ))}
        </Flex>
    );
});
