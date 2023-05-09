import CircleButton from "../../elements/CircleButton"

const WorldMapLayersComponent = () => {
    const layers = ["R", "A", "T"]
    return (
        <div className="flex space-x-2">
            {layers.map((layer, index) => (<CircleButton>{layer}</CircleButton>))}
        </div>
    )
}

export default WorldMapLayersComponent