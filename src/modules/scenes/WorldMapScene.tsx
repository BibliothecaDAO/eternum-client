import { CameraControls } from '@react-three/drei'

export const WorldMapScene = () => {
    return (
        <>
            <CameraControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="green" />
            </mesh>
        </>
    )
}