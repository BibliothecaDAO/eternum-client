import { CameraControls } from '@react-three/drei'
import WorldMap from '../../components/worldmap/WorldMap'

export const WorldMapScene = () => {
    return (
        <>
            <CameraControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <WorldMap />
        </>
    )
}