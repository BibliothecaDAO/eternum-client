import { CameraControls } from '@react-three/drei'
import WorldMap from '../../components/worldmap/WorldMap'
import { Model } from '../../components/worldmap/WorldMap.jsx'
import RealmsPositions from '../../components/worldmap/RealmsPositions'

export const WorldMapScene = () => {
    return (
        <>

            <ambientLight />
            <pointLight position={[0, 5, 0]} />
            <RealmsPositions />
            <WorldMap />
        </>
    )
}