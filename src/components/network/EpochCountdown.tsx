import { BaseContainer } from "../../containers/BaseContainer"
import ProgressBar from "../../elements/ProgressBar"

const EpochCountdown = () => {
    return (<BaseContainer className="w-2/3 p-4 ml-auto border-t-0 border-r-0 rounded-r-none rounded-tl-none">
        <ProgressBar progress={83}>952</ProgressBar>
    </BaseContainer>)
}

export default EpochCountdown