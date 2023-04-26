import { useControls } from 'leva';
import * as THREE from 'three';

const WorldMap = () => {

    const textureLoader = new THREE.TextureLoader();
    const heightmap = textureLoader.load('/textures/heightmap.png');

    // heightmap.wrapS = THREE.RepeatWrapping;
    // heightmap.wrapT = THREE.RepeatWrapping;

    const { mapScale, displacementScale } = useControls({
        mapScale: {
            value: 13.37,
            step: 0.01
        },
        displacementScale:
        {
            value: 0.3,
            step: 0.01
        }
    })

    return (
        <mesh rotation={
            [-Math.PI / 2, 0, 0]
        } scale={[
            mapScale, mapScale, mapScale
        ]}>
            <planeGeometry args={[21.39, 10, 50, 50]} />
            <meshStandardMaterial
                color={'green'}
                displacementMap={heightmap}
                displacementScale={displacementScale}
            />
        </mesh>
    );
};

export default WorldMap;