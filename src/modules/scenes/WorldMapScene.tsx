import WorldMap from '../../components/worldmap/WorldMap'
import { Model } from '../../components/worldmap/WorldMap.jsx'
import RealmsPositions from '../../components/worldmap/RealmsPositions'
import { Flags } from '../../components/worldmap/Flags.jsx'
import { Flags_1 } from '../../components/worldmap/Flags_1.jsx'
import Arcs from '../../components/worldmap/Arcs.jsx'
import realmsJson from '../../geodata/realms.json';


export const WorldMapScene = () => {

    // choose 10 pairs of random realms
    const fromRealms = []
    const toRealms = []
    for (let i = 0; i < 10; i++) {
        const fromRealmIndex = Math.floor(Math.random() * realmsJson.features.length);
        let toRealmIndex = Math.floor(Math.random() * realmsJson.features.length);
        while (toRealmIndex === fromRealmIndex) {
            toRealmIndex = Math.floor(Math.random() * realmsJson.features.length);
        }
        fromRealms.push({
            x: realmsJson.features[fromRealmIndex].xy[0],
            y: 0,
            z: realmsJson.features[fromRealmIndex].xy[1]
        })
        toRealms.push(
            {
                x: realmsJson.features[toRealmIndex].xy[0],
                y: 0,
                z: realmsJson.features[toRealmIndex].xy[1]
            }
        )
    }

    return (
        <>
            {/* <RealmsPositions /> */}
            <Flags />
            <Model />
            <Arcs from={fromRealms} to={toRealms} />
        </>
    )
}