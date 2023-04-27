import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import realmsJson from '../../geodata/realms.json';
import * as THREE from 'three';
// Source: https://gist.github.com/gre/1650294
const easeOutCubic = function ( t ) {

    return ( -- t ) * t * t + 1;

};
// Scaling curve causes particles to grow quickly, ease gradually into full scale, then
// disappear quickly. More of the particle's lifetime is spent around full scale.
const scaleCurve = function ( t ) {

    return Math.abs( easeOutCubic( ( t > 0.5 ? 1 - t : t ) * 2 ) );

};

function resampleParticle( i ) {

  sampler.sample( _position, _normal );
  _normal.add( _position );

  dummy.position.copy( _position );
  dummy.scale.set( scales[ i ], scales[ i ], scales[ i ] );
  dummy.lookAt( _normal );
  dummy.updateMatrix();

  stemMesh.setMatrixAt( i, dummy.matrix );
  blossomMesh.setMatrixAt( i, dummy.matrix );

}

export function Flags (props) {
    const { nodes, materials } = useGLTF('/models/flag-transformed.glb')
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
      dummy.scale.set( 1,1,1 );
      dummy.updateMatrix();

      woodMesh.setMatrixAt( i, dummy.matrix );
      flagMesh.setMatrixAt( i, dummy.matrix );

    }

    woodMesh.instanceMatrix.needsUpdate = true;
    flagMesh.instanceMatrix.needsUpdate = true;
    
    return (
      <group {...props} dispose={null} rotation={[
        -Math.PI / 2,
        0,
        0
      ]}>
        <primitive object={woodMesh} />
        <primitive object={flagMesh} />
      </group>
    )
}

  
useGLTF.preload('/models/flag-transformed.glb')