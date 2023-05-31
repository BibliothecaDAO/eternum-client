import RealmInfoComponent from "../components/cityview/realm/RealmInfoComponent"
import RealmManagementComponent from "../components/cityview/realm/RealmManagementComponent"
import RealmStatusComponent from "../components/cityview/realm/RealmStatusComponent"

const RealmManagementModule = () => {
    return (
        <div className="flex flex-col w-full mb-24">
            <RealmInfoComponent />
            <RealmStatusComponent />
            <RealmManagementComponent />
        </div>
    )
}

export default RealmManagementModule