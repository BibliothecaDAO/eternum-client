import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { WorldMapScene } from "./WorldMapScene";
import { RealmCityViewScene } from "./RealmCityViewScene";
import { CombatScene } from "./CombatScene";
import { BastionScene } from "./BastionScene";
import useUIStore from "../../hooks/store/useUIStore";


export const MainScene = () => {
    const activeScene = useUIStore((state) => state.activeScene);

    const renderActiveScene = (): JSX.Element | null => {
        switch (activeScene) {
            case 'map':
                return <WorldMapScene />;
            case 'bastion':
                return <BastionScene />;
            default:
                return null;
        }
    };

    return (
        <Canvas
            raycaster={{ params: { Points: { threshold: 0.2 } } }}
        >
            <color attach="background" args={['lightgrey']} />
            <Perf position="top-left" />
            {renderActiveScene()}
        </Canvas>
    )
}