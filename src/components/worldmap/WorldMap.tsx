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

    const uniforms = {
        bumpTexture: { value: heightmap },
        bumpScale: { value: 0.1 },
    }

    const groundMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
            uniform sampler2D bumpTexture;
            uniform float bumpScale;

            varying float vAmount;

            void main() {
                vec4 bumpData = texture2D( bumpTexture, uv );
                vAmount = bumpData.r; // assuming map is grayscale it doesn't matter if you use r, g, or b.
                vec3 newPosition = position + normal * bumpScale * vAmount;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
            }
        `,
        fragmentShader: `
            varying float vAmount;

            void main() {
                vec3 water = (smoothstep( 0.01, 0.10, vAmount ) - smoothstep( 0.24, 0.35, vAmount )) * vec3( 0, 0.0, 1.0 );
                
                
                vec3 sand = (smoothstep( 0.3, 0.32, vAmount ) - smoothstep( 0.30, 0.40, vAmount )) * vec3( 0.76, 0.7, 0.5 );
                vec3 grass = (smoothstep( 0.3, 0.46, vAmount ) - smoothstep( 0.33, 0.60, vAmount )) * vec3( 0, 0.6, 0.01 );
                vec3 rock = (smoothstep( 0.43, 0.75, vAmount ) - smoothstep( 0.5, 0.85, vAmount )) * vec3( 0.28, 0.25, 0.23 );


                gl_FragColor = vec4( water + sand + grass + rock, 1.0 );
            }
        `,
    })

    const land = new THREE.PlaneGeometry(21.39, 10, 1000, 1000);

    return (
        <mesh rotation={
            [-Math.PI / 2, 0, 0]
        } scale={[
            mapScale, mapScale, mapScale
        ]}>
            {/* <planeGeometry args={[21.39, 10, 50, 50]} /> */}
            <mesh geometry={land} material={groundMaterial} />
            {/* <meshStandardMaterial
                // color={'gray'}
                
                displacementMap={heightmap}
                displacementScale={displacementScale}
            /> */}
        </mesh>
    );
};

export default WorldMap;