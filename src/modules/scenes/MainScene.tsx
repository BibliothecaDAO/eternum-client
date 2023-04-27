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
import { Sky, Environment, Lightformer, useHelper, PerspectiveCamera, MapControls } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, Outline, EffectComposerContext } from '@react-three/postprocessing'
import { Sobel } from '../../utils/effects.jsx'
import { useControls, button } from 'leva';
import * as THREE from 'three'
import realmsJson from '../../geodata/realms.json';
import { CameraControls } from '../../utils/Camera';

export const Camera = () => {
    const cameraPosition = useUIStore((state) => state.cameraPosition);
    const setCameraPosition = useUIStore((state) => state.setCameraPosition);
    const cameraTarget = useUIStore((state) => state.cameraTarget);
    const setCameraTarget = useUIStore((state) => state.setCameraTarget);

    useControls({
        lookAt: button((id) => {
            //randomize camera position
            const randomRealmIndex = Math.floor(Math.random() * realmsJson.features.length);
            const point = {
                x: realmsJson.features[randomRealmIndex].xy[0],
                y: 0.233,
                z: realmsJson.features[randomRealmIndex].xy[1]
            }
            setCameraTarget(new THREE.Vector3(point.x, point.y, point.z))
            setCameraPosition(new THREE.Vector3(point.x + (25 * Math.random() < 1 ? 1 : -1), 25, point.z + 25 * Math.random() < 1 ? 1 : -1))
        })
    })

    return <>
        <CameraControls
            position={cameraPosition}
            target={cameraTarget}
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

    return (
        <Canvas
            raycaster={{ params: { Points: { threshold: 0.2 } } }}
            camera={{ fov: 45 }}
        >
            <Sky azimuth={1} inclination={0.6} distance={1000} />
            <ambientLight />
            <Camera />
            <pointLight position={[10, 10, 10]} />
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
            <fog attach="fog" color="skyblue" near={150} far={360} />
        </Canvas>
    )
}