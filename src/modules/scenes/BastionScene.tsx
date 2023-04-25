import { CameraControls, OrbitControls } from '@react-three/drei'
// import BastionView from '../../components/bastion/Bastion'
import { Model } from '../../components/bastion/Bastion.jsx'

export const BastionScene = () => {
    return (
        <>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
        </>
    )
}