import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import realmsJson from '../../geodata/realms.json';
import * as THREE from 'three';
import useUIStore from '../../hooks/store/useUIStore';
import { useSpring, animated } from '@react-spring/three'
import gsap from 'gsap';
import { useFrame, useThree } from '@react-three/fiber';

const count = realmsJson.features.length;

export function Flags (props) {
    const { nodes, materials } = useGLTF('/models/flag-transformed.glb')

    const setCameraPosition = useUIStore((state) => state.setCameraPosition);
    const setCameraTarget = useUIStore((state) => state.setCameraTarget);
    const showRealmsFlags = useUIStore((state) => state.showRealmsFlags);
    const setShowRealmsFlags = useUIStore((state) => state.setShowRealmsFlags);

    const [woodInstances, setWoodInstances] = useState(null);
    const [flagInstances, setFlagInstances] = useState(null);

    let scale = new THREE.Vector3();
    const tempObject = new THREE.Object3D();
    let matrix = new THREE.Matrix4();

    const updateFlagScale = (id, _scale) => {
      scale.set(_scale, _scale, _scale);
      woodInstances.getMatrixAt(id, matrix);
      matrix.decompose(tempObject.position, tempObject.quaternion, tempObject.scale);
      tempObject.scale.copy(scale);
      tempObject.updateMatrix();
      woodInstances.setMatrixAt(id, tempObject.matrix);
      flagInstances.setMatrixAt(id, tempObject.matrix);
    }

    useFrame(({ camera }) => {
      const pos = camera.position;
      if (pos) {
          const needShowFlags = pos.y <= 50;
          if (needShowFlags !== showRealmsFlags) {
              setShowRealmsFlags(needShowFlags);
          }
      }
    })

    useEffect(() => {
      if (!woodInstances || !flagInstances) return;

      const scales = {
        startScale: showRealmsFlags ? 0.01 : 1,
        endScale: showRealmsFlags ? 1 : 0.01
      }
      const tl = gsap.timeline();
      tl.to(scales, {
        startScale: scales.endScale,
        duration: 0.7,
        ease: 'Bounce.easeOut',
        onUpdate: () => {
          //console.log('scales.startScale', scales.startScale);
          for ( let i = 0; i < count; i ++ ) {
            updateFlagScale(i, scales.startScale);
          }
          woodInstances.instanceMatrix.needsUpdate = true;
          flagInstances.instanceMatrix.needsUpdate = true;
        }
      })


    }, [showRealmsFlags, woodInstances, flagInstances])

    useEffect(() => {

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
            .multiply( new THREE.Matrix4().makeScale( 0.3, 0.3, 0.3 ) );
  
      woodGeometry.applyMatrix4( defaultTransform );
      flagGeometry.applyMatrix4( defaultTransform );
  
  
      woodMesh = new THREE.InstancedMesh( woodGeometry, woodMaterial, count )
      flagMesh = new THREE.InstancedMesh( flagGeometry, flagMaterial, count )

      woodMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
      flagMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
  
      for ( let i = 0; i < count; i ++ ) {
        const x = realmsJson.features[i].xy[0];
        const y = realmsJson.features[i].xy[1];
        const z = 1
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
      setWoodInstances(woodMesh);
      setFlagInstances(flagMesh);
    }, [])

    const clickHandler = (e) => {
      e.stopPropagation()
      console.log(e.intersections)
      if ( e.intersections.length > 0 ) {
        const instanceId = e.intersections[ 0 ].instanceId;
        const point = e.intersections[ 0 ].point;
        // updateFlagScale(instanceId, 2);
        // woodInstances.instanceMatrix.needsUpdate = true;
        // flagInstances.instanceMatrix.needsUpdate = true;
        const targetPos = new THREE.Vector3(point.x, point.y, point.z)
        const cameraPos = new THREE.Vector3(point.x + 25 * (Math.random() < 0.5 ? 1 : -1), 25, point.z + 25 * (Math.random() < 0.5 ? 1 : -1))
        setCameraTarget(targetPos)
        setCameraPosition(cameraPos)

        console.log(targetPos, cameraPos, instanceId, realmsJson.features[instanceId].xy)
      }
    }
    
    return (
      <group {...props} dispose={null}
      rotation={[
        -Math.PI / 2,
        0,
        0
      ]} onClick={clickHandler} >
        { woodInstances && <primitive  object={woodInstances} /> }
        { flagInstances && <primitive  object={flagInstances} /> }
      </group>
    )
}

  
useGLTF.preload('/models/flag-transformed.glb')