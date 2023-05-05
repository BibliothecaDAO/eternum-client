import WorldMap from '../../components/worldmap/WorldMap'
import { Model } from '../../components/worldmap/WorldMap.jsx'
import RealmsPositions from '../../components/worldmap/RealmsPositions'
import { Flags } from '../../components/worldmap/Flags.jsx'

export const WorldMapScene = () => {

    return (
        <>
            {/* <RealmsPositions /> */}
            <Flags />
            <Model />
        </>
    )
}