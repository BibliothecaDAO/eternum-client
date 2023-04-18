import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useControls } from 'leva';
const BastionView = () => {


    const model = useLoader(GLTFLoader, '/models/bastion.glb')
    console.log(model)


    const { bastionPosition, bastionScale } = useControls({
        bastionPosition:
        {
            value: { x: 0, z: 0, y: 0 },
            step: 0.01
        },
        bastionScale:
        {
            value: 1.05,
            step: 0.05
        }
    })

    return (<group position={[0, -5, 0]}  >
        <primitive object={model.scene} scale={[bastionScale, bastionScale, bastionScale]} position={[bastionPosition.x, bastionPosition.y, bastionPosition.z]}
        />

    </group>);
};

export default BastionView;