import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useTexture } from '@react-three/drei';
import { Mesh, Shape, ExtrudeGeometry } from 'three';
import * as THREE from 'three';
import land from '../../geodata/land.json';
import { useEffect, useState } from 'react';
import RealmsPositions from './RealmsPositions'
import { useControls, button } from 'leva';

const WorldMap = () => {

    //   const [geometries, setGeometries] = useState([]);

    const model = useLoader(GLTFLoader, '/models/world_map.glb')
    console.log(model)

    // const textureLoader = new THREE.TextureLoader();
    // const texture = useTexture('/textures/texture.png');
    // const heightmap = textureLoader.load('/textures/heightmap.png');

    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;

    // heightmap.wrapS = THREE.RepeatWrapping;
    // heightmap.wrapT = THREE.RepeatWrapping;


    //   useEffect( () => {
    //     const tmp = []
    //     for (let feature of land.features) {
    //       const shape = new Shape();
    //       const coordinates = feature.geometry.coordinates[0];
    //       shape.moveTo(coordinates[0][0], coordinates[0][1]);
    //       for (let i = 1; i < coordinates.length; i++) {
    //         shape.lineTo(coordinates[i][0], coordinates[i][1]);
    //       }
    //       const geometry = new ExtrudeGeometry(shape, {
    //         depth: 0.2,
    //         bevelEnabled: false
    //       });
    //       tmp.push(geometry);
    //     }
    //     setGeometries(tmp);
    //   }, [])

    // Create the geometry

    //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    const { worldmapPosition, worldmapScale } = useControls({
        worldmapPosition:
        {
            value: { x: 0, z: 0, y: 0 },
            step: 0.01
        },
        worldmapScale:
        {
            value: 161.05,
            step: 0.05
        }
    })

    return (
        <group position={[0, -5, 0]}  >
            {/* <RealmsPositions /> */}
            <primitive object={model.scene} scale={[worldmapScale, worldmapScale, worldmapScale]} position={[worldmapPosition.x, worldmapPosition.y, worldmapPosition.z]}
            />
            {/* {geometries.map((geometry, i) => <mesh key={i} geometry={geometry} material={material} />)} */}
            {/* <mesh>
      <planeGeometry args={[21.39, 10, 50, 50]} />
      <meshStandardMaterial 
        map={texture} 
        displacementMap={heightmap} 
        displacementScale={0.3} 
      />
    </mesh> */}
        </group>);
};

export default WorldMap;