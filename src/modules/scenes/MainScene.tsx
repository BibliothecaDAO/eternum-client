import useUIStore from "../../hooks/store/useUIStore";
import { WorldMapScene } from "./WorldMapScene";
import { RealmCityViewScene } from "./RealmCityViewScene";
import { CombatScene } from "./CombatScene";
import { BastionScene } from "./BastionScene";

export const MainScene = () => {
    const activeScene = useUIStore((state) => state.activeScene);
    const setActiveScene = useUIStore((state) => state.setActiveScene);

    const renderActiveScene = (): JSX.Element | null => {
        switch (activeScene) {
            case 'map':
                return <WorldMapScene />;
            case 'realmView':
                return <RealmCityViewScene />;
            case 'combat':
                return <CombatScene />;
            case 'bastion':
                return <BastionScene />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full">
            {renderActiveScene()}
        </div>
    )
}