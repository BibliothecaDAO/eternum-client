import { BaseContainer } from "../containers/BaseContainer"
import { SecondaryContainer } from "../containers/SecondaryContainer"
import Tabs from "./Tabs"

const RealmManagementComponent = () => {
    return (
        <div className="flex w-full mt-0.5 relative">
            <BaseContainer className="w-full min-h-[400px]">
                <Tabs />
            </BaseContainer>
            <SecondaryContainer className="absolute bottom-0 min-w-[300px] min-h-[200px] translate-x-full -right-2">
            </SecondaryContainer>
        </div>
    )
}

export default RealmManagementComponent