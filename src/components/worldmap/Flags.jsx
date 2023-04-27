import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import realmsJson from '../../geodata/realms.json';
import * as THREE from 'three';
import useUIStore from '../../hooks/store/useUIStore';

export function Flags (props) {
    const { nodes, materials } = useGLTF('/models/flag-transformed.glb')

    const setCameraPosition = useUIStore((state) => state.setCameraPosition);
    const setCameraTarget = useUIStore((state) => state.setCameraTarget);


    const count = realmsJson.features.length;

    let woodMesh, flagMesh;
    let woodGeometry, flagGeometry;
    let woodMaterial, flagMaterial;

    const _woodMesh = nodes.Cylinder_1.geometry;
	  const _flagMesh = nodes.Cylinder.geometry;

    woodGeometry = _woodMesh.clone();
    flagGeometry = _flagMesh.clone();
    woodMaterial = materials.wood
    flagMaterial = materials.flag

    const defaultTransform = new THREE.Matrix4()
          .makeRotationX( Math.PI / 2 )
					.multiply( new THREE.Matrix4().makeScale( 1, 1, 1 ) );

    woodGeometry.applyMatrix4( defaultTransform );
    flagGeometry.applyMatrix4( defaultTransform );


    woodMesh = new THREE.InstancedMesh( woodGeometry, woodMaterial, count );
    flagMesh = new THREE.InstancedMesh( flagGeometry, flagMaterial, count );

    woodMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
    flagMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );

    for ( let i = 0; i < count; i ++ ) {
      const x = realmsJson.features[i].xy[0];
      const y = realmsJson.features[i].xy[1];
      const z = 0
      const _position = new THREE.Vector3( x, y, z );
      const dummy = new THREE.Object3D();
      dummy.position.copy( _position );
      dummy.rotateZ(
        //random
        Math.random() * Math.PI * 2
      );
      dummy.updateMatrix();

      woodMesh.setMatrixAt( i, dummy.matrix );
      flagMesh.setMatrixAt( i, dummy.matrix );

    }

    woodMesh.instanceMatrix.needsUpdate = true;
    flagMesh.instanceMatrix.needsUpdate = true;

    const clickHandler = (e) => {
      e.stopPropagation()
      console.log(e);
      if ( e.intersections.length > 0 ) {
        const instanceId = e.intersections[ 0 ].instanceId;
        const point = e.intersections[ 0 ].point;
        const scale = new THREE.Vector3(2, 2, 2); // set the desired scale here
        let woodMatrix = new THREE.Matrix4();
        let flagMatrix = new THREE.Matrix4();
        woodMesh.getMatrixAt(instanceId, woodMatrix);
        flagMesh.getMatrixAt(instanceId, flagMatrix);
        console.log(woodMatrix)
        woodMesh.setMatrixAt(instanceId, woodMatrix.scale(scale));
        flagMesh.setMatrixAt(instanceId, flagMatrix.scale(scale));
        woodMesh.instanceMatrix.needsUpdate = true;
        flagMesh.instanceMatrix.needsUpdate = true;

        setCameraTarget(new THREE.Vector3(point.x, point.y, point.z))
        setCameraPosition(new THREE.Vector3(point.x + (50 * Math.random() < 1 ? 1 : -1), 35, point.z + 50 * Math.random() < 1 ? 1 : -1))
      }
    }
    
    return (
      <group {...props} dispose={null} rotation={[
        -Math.PI / 2,
        0,
        0
      ]} onClick={clickHandler}>
        <primitive object={woodMesh} />
        <primitive object={flagMesh} />
      </group>
    )
}

  
useGLTF.preload('/models/flag-transformed.glb')