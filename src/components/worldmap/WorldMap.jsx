/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/world_map.glb --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/world_map-transformed.glb')
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
    <group {...props} dispose={null} scale={[worldmapScale, worldmapScale, worldmapScale]} position={[worldmapPosition.x, worldmapPosition.y, worldmapPosition.z]}>
      <mesh geometry={nodes.ocean.geometry} material={materials.Ocean} scale={[1, 1, 0.5]} />
      <mesh geometry={nodes.continents.geometry} material={materials.Continents} position={[0, -0.0039, 0.01]} scale={[0.89, 0.9, 0.86]} />
      {/* <group position={[0, 0.21, 0]} scale={[0.85, 1, 0.5]}>
        <mesh geometry={nodes.Plane001.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Plane001_1.geometry} material={materials.Gold} />
      </group> */}
      {/* <mesh geometry={nodes.room.geometry} material={nodes.room.material} position={[0, 0.05, 0]} /> */}
    </group>
  )
}

useGLTF.preload('/models/world_map-transformed.glb')
