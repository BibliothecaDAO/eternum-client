import { BaseContainer } from "../containers/BaseContainer"
import Avatar from "../elements/Avatar"

const ContextComponent = () => {
    return (
        <BaseContainer className="w-12 p-1 rounded-b-3xl rounded-t-xl">
            <div className="mt-10 ">
                <Avatar src="/images/avatars/1.png" />
            </div>
        </BaseContainer>
    )
}

export default ContextComponent