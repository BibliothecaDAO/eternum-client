import { useMemo, useState } from "react";
import { BaseContainer } from "../../../containers/BaseContainer"
import { SecondaryContainer } from "../../../containers/SecondaryContainer"
import { ReactComponent as CrossSwords } from '../../../assets/icons/common/cross-swords.svg';
import { ReactComponent as PickAxeSecond } from '../../../assets/icons/common/pick-axe-second.svg';
import { ReactComponent as Coin } from '../../../assets/icons/common/coin.svg';
import { ReactComponent as City } from '../../../assets/icons/common/city.svg';
import { Tabs } from "../../../elements/tab";
import RealmTradeComponent from "./RealmTradeComponent";


const RealmManagementComponent = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = useMemo(
        () => [
            {
                label: (
                    <div className="flex flex-col items-center">
                        <PickAxeSecond className="mb-2 fill-current" />{' '}
                        <div>Labor</div>
                    </div>
                ),
                component: <div />,
            },
            {
                label: (
                    <div className="flex flex-col items-center">
                        <Coin className="mb-2 fill-current" />{' '}
                        <div>Trade</div>
                    </div>
                ),
                component: <RealmTradeComponent />,
            },
            {
                label: (
                    <div className="flex flex-col items-center">
                        <City className="mb-2 fill-current" />{' '}
                        <div>Civilians</div>
                    </div>
                ),
                component: <div />,
            }
        ],
        [selectedTab]
    );
    return (
        <Tabs
            selectedIndex={selectedTab}
            onChange={(index) => setSelectedTab(index as number)}
            variant="primary"
            className="flex-1 -m-2"
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
    )
}

export default RealmManagementComponent