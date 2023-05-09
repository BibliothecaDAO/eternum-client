import { BaseContainer } from "../../containers/BaseContainer"
import ProgressBar from "../../elements/ProgressBar"

const EpochCountdown = () => {
    return (<BaseContainer className="w-2/3 p-4 ml-auto">
        <ProgressBar progress={83}>952</ProgressBar>
    </BaseContainer>)
}

export default EpochCountdown