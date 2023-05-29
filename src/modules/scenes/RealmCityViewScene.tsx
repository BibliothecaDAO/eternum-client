import { Model } from '../../components/cityview/CityView.jsx'

export const RealmCityViewScene = () => {
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
        </>
    )
}