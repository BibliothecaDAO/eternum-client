import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { WorldMapScene } from "./WorldMapScene";
import { RealmCityViewScene } from "./RealmCityViewScene";
import { CombatScene } from "./CombatScene";
import { BastionScene } from "./BastionScene";
import useUIStore from "../../hooks/store/useUIStore";
import { useLocation, Switch, Route } from "wouter"
import { useTransition } from "@react-spring/core"
import { a } from "@react-spring/three"
import { Environment, Lightformer } from '@react-three/drei'

export const MainScene = () => {
    const activeScene = useUIStore((state) => state.activeScene);

    const [location] = useLocation()
    // Animated shape props
    const transition = useTransition(location, {
        from: { position: [0, 0, -20], rotation: [0, Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
        enter: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1], opacity: 1 },
        leave: { position: [0, 0, -10], rotation: [0, -Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
        config: () => (n) => n === "opacity" && { friction: 60 },
    })

    const renderActiveScene = (): JSX.Element | null => {
        switch (activeScene) {
            case 'map':
                return <WorldMapScene />;
            case 'bastion':
                return <BastionScene />;
            case 'realmView':
                return <RealmCityViewScene />;
            default:
                return null;
        }
    };

    return (
        <Canvas
            raycaster={{ params: { Points: { threshold: 0.2 } } }}
        >
            <color attach="background" args={['lightgrey']} />
            <Environment
                background
                files={[
                    '/envmap/px.png',
                    '/envmap/nx.png',
                    '/envmap/py.png',
                    '/envmap/ny.png',
                    '/envmap/pz.png',
                    '/envmap/nz.png',
                ]}
                resolution={1024}
            >
                <color args={['#000000']} attach="background" />
                <Lightformer
                    position-y={10}

                    scale={5}
                    color="white"
                    intensity={3}
                    form="ring"
                />
            </Environment>
            <Perf position="top-left" />
            {
                transition(({ opacity, ...props }, location) => (
                    <a.group {...props}>
                        <Switch location={location}>
                            <Route path="/map">
                                <WorldMapScene />
                            </Route>
                            <Route path="/bastion">
                                <BastionScene />
                            </Route>
                            <Route path="/realmView">
                                <RealmCityViewScene />
                            </Route>
                        </Switch>
                    </a.group>
                ))
            }
        </Canvas>
    )
}