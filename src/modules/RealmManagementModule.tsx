import RealmInfoComponent from "../components/RealmInfoComponent"
import RealmManagementComponent from "../components/RealmManagementComponent"

const RealmManagementModule = () => {
    return (
        <div className="flex flex-col w-full">
            <RealmInfoComponent />
            <RealmManagementComponent />
        </div>
    )
}

export default RealmManagementModule