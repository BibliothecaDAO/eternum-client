import * as THREE from 'three'
import { useState, useEffect, useMemo, useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { useControls, button } from 'leva';

import realmsJson from '../../geodata/realms.json';

const RealmsPositions = () => {

    const [bufferGeometry, setBufferGeometry] = useState(new THREE.BufferGeometry());
    const realmsPositions = new Float32Array(realmsJson.features.length * 3);
    const realmsColors = new Float32Array(realmsJson.features.length * 3);
    const { camera } = useThree();
    // const controls = useRef();

    // useEffect(() => {
    //     if (controls.current) controls.current.maxSpeed = 50;
    // }, [controls])

    const { realmsPosition, realmsScale } = useControls({
        realmsPosition:
        {
            value: { x: 0, z: 0, y: 0.65 },
            step: 0.01
        },
        realmsScale:
        {
            value: 1,
            step: 0.01
        },
        // lookAt: button(() => {
        //     if (controls) {
        //         const randomRealmIndex = Math.floor(Math.random() * realmsJson.features.length);
        //         const point = {
        //             x: bufferGeometry.attributes.position.array[randomRealmIndex * 3],
        //             z: bufferGeometry.attributes.position.array[randomRealmIndex * 3 + 1],
        //             y: bufferGeometry.attributes.position.array[randomRealmIndex * 3 + 2],
        //         }
        //         console.log(point)
        //         controls.current.setLookAt(point.x + 10, 15, point.z + 10, point.x, point.y, point.z, true)
        //     }
        // })
    })

    const calculatedPositions = useMemo(() => {
        const tmpPos = new Float32Array(realmsJson.features.length * 3);
        for (let i = 0; i < realmsJson.features.length; i++) {
            const i3 = i * 3;
            // realms.xy[0], realms.xy[1], 3
            tmpPos[i3] = realmsJson.features[i].xy[0];
            tmpPos[i3 + 1] = realmsJson.features[i].xy[1];
            tmpPos[i3 + 2] = 0.233;
        }
        return tmpPos;
    }, [])

    const calculatedColors = useMemo(() => {
        const tmpCol = new Float32Array(realmsJson.features.length * 3);
        for (let i = 0; i < realmsJson.features.length; i++) {
            const i3 = i * 3;
            // realms.xy[0], realms.xy[1], 3
            tmpCol[i3] = 1
            tmpCol[i3 + 1] = 0
            tmpCol[i3 + 2] = 0
        }
        return tmpCol;
    }, [])

    useEffect(() => {

        bufferGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(calculatedPositions, 3)
        );

        bufferGeometry.setAttribute(
            'color',
            new THREE.BufferAttribute(calculatedColors, 3)
        );
    }, [])

    const realmsMaterial = new THREE.PointsMaterial({
        size: 0.3,
        depthWrite: false,
        vertexColors: true,
    });


    const [lookAt, setLookAt] = useState(null);

    // useFrame(() => {
    //     if (lookAt) {
    //         //camera.lookAt(lookAt)
    //     }
    // })

    const clickHandler = (e) => {
        const colors = calculatedColors;
        const positions = calculatedPositions;
        for (let inter of e.intersections) {
            // recolor clicked and +- 100 around
            const i3 = (inter.index) * 3;
            // realms.xy[0], realms.xy[1], 3
            colors[i3] = 1;
            colors[i3 + 1] = 1;
            colors[i3 + 2] = 0;
        }
        const point = e.intersections[0].point;
        const newGeometry = new THREE.BufferGeometry();
        newGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );
        newGeometry.setAttribute(
            'color',
            new THREE.BufferAttribute(colors, 3)
        );
        setBufferGeometry(newGeometry);
        // controls.current.setLookAt(point.x + 10, 15, point.z + 10, point.x, point.y, point.z, true)
        //controls.current.lookInDirectionOf(point.x,point.y,point.z,true)


        // gsap.to(controls.current.camera.position, { duration: 1, x: point.x, z: point.y }).then(() => {
        //     //setLookAt(null);
        // });
    }

    return <>
        <points onClick={clickHandler} geometry={bufferGeometry} material={realmsMaterial} position={
            [realmsPosition.x, realmsPosition.y, realmsPosition.z]} rotation={[-Math.PI / 2, 0, 0]}
            scale={[
                realmsScale,
                realmsScale,
                realmsScale
            ]} />
    </>
}

export default RealmsPositions;