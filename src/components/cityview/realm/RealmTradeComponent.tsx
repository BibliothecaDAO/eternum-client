import React, { useEffect, useMemo, useState } from 'react';
import { Tabs } from '../../../elements/tab';
import { CaravansPanel } from './caravans/CaravansPanel';

type RealmTradeComponentProps = {}

export const RealmTradeComponent = ({ }: RealmTradeComponentProps) => {

    const [selectedTab, setSelectedTab] = useState(2);

    const tabs = useMemo(
        () => [
            {
                label: (
                    <div className="flex flex-col items-center">
                        <div>My Trades</div>
                    </div>
                ),
                component: <div />,
            },
            {
                label: (
                    <div className="flex flex-col items-center">
                        <div>Market</div>
                    </div>
                ),
                component: <div />,
            },
            {
                label: (
                    <div className="flex flex-col items-center">
                        <div>Caravans</div>
                    </div>
                ),
                component: <CaravansPanel />,
            },
            {
                label: (
                    <div className="flex flex-col items-center">
                        <div>Trade Routes</div>
                    </div>
                ),
                component: <div />,
            }
        ],
        [selectedTab]
    );

    return (
        <>
            <Tabs
                selectedIndex={selectedTab}
                onChange={(index) => setSelectedTab(index as number)}
                variant="default"
                className='h-full'
            >
                <Tabs.List>
                    {tabs.map((tab, index) => (
                        <Tabs.Tab key={index}>{tab.label}</Tabs.Tab>
                    ))}
                </Tabs.List>
                <Tabs.Panels>
                    {tabs.map((tab, index) => (
                        <Tabs.Panel key={index}>{tab.component}</Tabs.Panel>
                    ))}
                </Tabs.Panels>
            </Tabs>
        </>
    );
};

export default RealmTradeComponent;