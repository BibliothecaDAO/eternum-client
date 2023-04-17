import { CameraControls } from '@react-three/drei'

export const BastionScene = () => {
    return (
        <>
            <CameraControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </>
    )
}