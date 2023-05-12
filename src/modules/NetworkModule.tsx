import EpochCountdown from "../components/network/EpochCountdown"
import NodeStatus from "../components/network/NodeStatus"

const NetworkModule = () => {
    return (
        <>
            <EpochCountdown />
            <NodeStatus />
        </>
    )
}

export default NetworkModule