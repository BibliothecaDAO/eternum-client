import { CameraControls } from '@react-three/drei'
import RealmCityView from '../../components/cityview/RealmCityView'

export const RealmCityViewScene = () => {
    return (
        <>
            <CameraControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <RealmCityView />
        </>
    )
}