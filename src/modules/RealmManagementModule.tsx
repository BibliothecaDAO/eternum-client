import RealmInfoComponent from "../components/cityview/realm/RealmInfoComponent"
import RealmManagementComponent from "../components/cityview/realm/RealmManagementComponent"
import RealmStatusComponent from "../components/cityview/realm/RealmStatusComponent"
import { BaseContainer } from "../containers/BaseContainer"

const RealmManagementModule = () => {
    return (
        <BaseContainer className="h-full !p-0 rounded-t-3xl">
            <RealmInfoComponent />
            {/* <RealmStatusComponent /> */}
            <RealmManagementComponent />
        </BaseContainer>
    )
}

export default RealmManagementModule