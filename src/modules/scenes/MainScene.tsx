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
import { Environment, Lightformer, useHelper, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline, EffectComposerContext } from '@react-three/postprocessing'
import { Sobel } from '../../utils/effects.jsx'
import * as THREE from 'three'
import { CameraControls, OrbitControls } from '@react-three/drei'

export const Camera = () => {
    const camera = useRef<any>()
    useHelper(camera, THREE.CameraHelper)

    useEffect(() => {
        camera.current.lookAt(0, 0, 0)
        camera.current.updateProjectionMatrix()
    }, [])


    return <>
        <OrbitControls
            onChange={
                (e) => {
                    console.log(e)
                }
            }
        ></OrbitControls>
        <PerspectiveCamera
            ref={camera}
            position={[3, 3, 3]}
            rotation={[0, 0, 0]}
            fov={90}
            near={0.001}
            far={4}
        />
    </>
}
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
            frameloop='demand'
        >

            <color attach="background" args={['white']} />
            <Camera />
            <Environment
                background
                blur={0.05}
                files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/table_mountain_2_puresky_1k.hdr"
            />
            {/* <Environment
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
            </Environment> */}
            <Perf position="top-left" />
            <Suspense>
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
            </Suspense>
            {/* <EffectComposer>
                <DepthOfField focusDistance={1} focalLength={1} bokehScale={1} height={2000} />
                <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} height={100} />
                <Noise opacity={0.01} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                <Sobel />
            </EffectComposer> */}
            <fog attach="fog" color="gray" near={200} far={600} />
        </Canvas>
    )
}