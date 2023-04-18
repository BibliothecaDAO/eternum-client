import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useControls } from 'leva';
const RealmCityView = () => {


    const model = useLoader(GLTFLoader, '/models/city_view.glb',
        (loader) => {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader)
        })
    console.log(model)


    const { cityPosition, cityScale } = useControls({
        cityPosition:
        {
            value: { x: 0, z: 0, y: 0 },
            step: 0.01
        },
        cityScale:
        {
            value: 1.05,
            step: 0.05
        }
    })

    return (<group position={[0, -5, 0]}  >
        <primitive object={model.scene} />
        <mesh>
            <planeGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="red" />
        </mesh>

    </group>);
};

export default RealmCityView;