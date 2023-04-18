import { CameraControls } from '@react-three/drei'
import BastionView from '../../components/bastion/Bastion'

export const BastionScene = () => {
    return (
        <>
            <CameraControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <BastionView />
        </>
    )
}