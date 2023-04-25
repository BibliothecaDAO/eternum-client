/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/city_view.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/city_view-transformed.glb')
  const { cityPosition, cityScale } = useControls({
    cityPosition:
    {
        value: { x: 0, z: 0, y: 0 },
        step: 0.01
    },
    cityScale:
    {
        value: 35.05,
        step: 0.05
    }
})
  return (
    <group {...props}  scale={[cityScale, cityScale, cityScale]} position={[cityPosition.x, cityPosition.y, cityPosition.z]} dispose={null}>
      <mesh geometry={nodes.archer_tower.geometry} material={materials['Bright Stone']} position={[4.33, 0.39, 2.36]} rotation={[0, -1.48, 0]} />
      <mesh geometry={nodes.barracks.geometry} material={materials['Bright Stone']} />
      <mesh geometry={nodes.mage_tower.geometry} material={materials['Bright Stone']} />
      <mesh geometry={nodes.castle.geometry} material={materials['Bright Stone']} />
      <mesh geometry={nodes.mine.geometry} material={materials.Mine} position={[0, -0.57, 0]} />
      <mesh geometry={nodes.storehouse.geometry} material={materials['Bright Stone']} position={[6.35, 0.14, -3.61]} rotation={[0, -1, 0]} scale={0.05} />
      <mesh geometry={nodes.storehouse001.geometry} material={materials['Bright Stone']} position={[-6.22, 0.06, 7.54]} rotation={[0, -0.44, 0]} scale={0.05} />
      <mesh geometry={nodes.storehouse002.geometry} material={materials['Bright Stone']} position={[-3.48, 0.06, 4.15]} rotation={[0, -1.48, 0]} scale={0.05} />
      <mesh geometry={nodes.storehouse003.geometry} material={materials['Bright Stone']} position={[-0.59, 0.06, 3.54]} rotation={[0, -0.59, 0]} scale={0.05} />
      <group position={[0, 0.45, 0]}>
        <mesh geometry={nodes.Plane014.geometry} material={materials.Rooftops} />
        <mesh geometry={nodes.Plane014_1.geometry} material={materials.Rooftops} />
      </group>
      <mesh geometry={nodes.city_foundation.geometry} material={materials.City} />
      <group position={[0, 1.22, 0]}>
        <mesh geometry={nodes.Plane007.geometry} material={materials.Crops} />
        <mesh geometry={nodes.Plane007_1.geometry} material={materials.Crops} />
        <mesh geometry={nodes.Plane007_2.geometry} material={materials.Crops} />
      </group>
      <mesh geometry={nodes.roads.geometry} material={materials.Road} position={[1.8, 0.07, 2.06]} />
      <mesh geometry={nodes.walls.geometry} material={materials['Bright Stone']} position={[0, 0.27, 0]} />
      <mesh geometry={nodes.bridges.geometry} material={materials.City} />
      <group position={[1.8, 0.07, 2.06]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials.Boat} />
        <mesh geometry={nodes.Plane011_1.geometry} material={materials.Boat} />
      </group>
      <mesh geometry={nodes.boat.geometry} material={materials.Boat} scale={[0.21, 0.04, 0.04]} />
      <mesh geometry={nodes.boat001.geometry} material={materials.Boat} position={[3.35, 0, 5.12]} rotation={[Math.PI, -1.06, Math.PI]} scale={[0.21, 0.04, 0.04]} />
      <mesh geometry={nodes.boat002.geometry} material={materials.Boat} position={[3.6, 0, 5.27]} rotation={[Math.PI, -1.06, Math.PI]} scale={[0.21, 0.04, 0.04]} />
      <mesh geometry={nodes.boat003.geometry} material={materials.Boat} position={[3.85, 0, 5.43]} rotation={[Math.PI, -0.77, Math.PI]} scale={[0.21, 0.04, 0.04]} />
      <mesh geometry={nodes.boat004.geometry} material={materials.Boat} position={[4.04, 0, 5.67]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.21, 0.04, 0.04]} />
      <mesh geometry={nodes.boat005.geometry} material={materials.Boat} position={[2.75, 0, 6.13]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat006.geometry} material={materials.Boat} position={[2.88, 0, 6.22]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat007.geometry} material={materials.Boat} position={[2.51, 0, 6.54]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat008.geometry} material={materials.Boat} position={[2.97, 0, 5.69]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat009.geometry} material={materials.Boat} position={[3.09, 0, 5.77]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat010.geometry} material={materials.Boat} position={[3.23, 0, 5.86]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat011.geometry} material={materials.Boat} position={[2.25, 0, 7.01]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat012.geometry} material={materials.Boat} position={[-1.15, 0, 5.1]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat013.geometry} material={materials.Boat} position={[-2.08, 0, 5.43]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat014.geometry} material={materials.Boat} position={[-2.16, 0, 5.27]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat015.geometry} material={materials.Boat} position={[-2.2, 0, 5.11]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat016.geometry} material={materials.Boat} position={[-2.64, 0, 5.59]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat017.geometry} material={materials.Boat} position={[-2.71, 0, 5.42]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat018.geometry} material={materials.Boat} position={[-2.78, 0, 5.26]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.14, 0.03, 0.03]} />
      <mesh geometry={nodes.boat019.geometry} material={materials.Boat} position={[2.92, 0, 7.29]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.25, 0.05, 0.05]} />
      <mesh geometry={nodes.boat020.geometry} material={materials.Boat} position={[-2.04, 0, 9.21]} rotation={[Math.PI, -0.63, Math.PI]} scale={[0.25, 0.05, 0.05]} />
      <mesh geometry={nodes.boat021.geometry} material={materials.Boat} position={[-2.75, 0, 8.65]} rotation={[0, -1.56, 0]} scale={[0.17, 0.03, 0.03]} />
      <mesh geometry={nodes.boat022.geometry} material={materials.Boat} position={[-2.59, 0, 8.65]} rotation={[0, -1.56, 0]} scale={[0.17, 0.03, 0.03]} />
      <mesh geometry={nodes.boat023.geometry} material={materials.Boat} position={[-2.69, 0, 9.16]} rotation={[0, -1.56, 0]} scale={[0.17, 0.03, 0.03]} />
      <mesh geometry={nodes.boat024.geometry} material={materials.Boat} position={[4.39, 0, 4.02]} rotation={[-Math.PI, 0.38, -Math.PI]} scale={[0.25, 0.05, 0.05]} />
      <mesh geometry={nodes.boat025.geometry} material={materials.Boat} position={[7.66, 0, 9.14]} rotation={[Math.PI, -1.28, Math.PI]} scale={[0.25, 0.05, 0.05]} />
      <mesh geometry={nodes.boat026.geometry} material={materials.Boat} position={[-1.14, 0, 7.1]} rotation={[-Math.PI, 0.78, -Math.PI]} scale={[0.25, 0.05, 0.05]} />
      <mesh geometry={nodes.boat027.geometry} material={materials.Boat} position={[2.73, 0, 9.88]} rotation={[-Math.PI, 1.27, -Math.PI]} scale={[0.16, 0.03, 0.03]} />
      <mesh geometry={nodes.terrain.geometry} material={materials.Terrain} />
      <mesh geometry={nodes.lake.geometry} material={materials.Lake} />
      <mesh geometry={nodes.ocean.geometry} material={materials.Ocean} />
      <mesh geometry={nodes.river.geometry} material={materials.River} />
      <mesh geometry={nodes.trees.geometry} material={materials.Trees} />
      <mesh geometry={nodes.tree.geometry} material={materials.Trees} />
    </group>
  )
}

useGLTF.preload('/models/city_view-transformed.glb')
