import WorldMap from '../../components/worldmap/WorldMap'
import { Model } from '../../components/worldmap/WorldMap.jsx'
import RealmsPositions from '../../components/worldmap/RealmsPositions'
import { Flags } from '../../components/worldmap/Flags.jsx'
import { Flags_1 } from '../../components/worldmap/Flags_1.jsx'

export const WorldMapScene = () => {

    return (
        <>
            {/* <RealmsPositions /> */}
            <Flags />
            <Model />
        </>
    )
}