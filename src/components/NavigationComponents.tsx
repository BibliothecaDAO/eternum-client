import { useState } from "react"
import Avatar from "../elements/Avatar"
import CircleButton from "../elements/CircleButton"
import clsx from "clsx"

const NavgationComponent = () => {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className="relative cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Avatar className="relative z-10 w-24 h-24" src="/images/avatars/1.png" />
            <CircleButton className={clsx("absolute z-0 w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 text-[10px]",
                hovered ? "-translate-y-[80px] -translate-x-12" : ""
            )}>R</CircleButton>
            <CircleButton className={clsx("absolute z-0 w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 text-[10px]",
                hovered ? "-translate-y-[90px]" : ""
            )}>B</CircleButton>
            <CircleButton className={clsx("absolute z-0 w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 text-[10px]",
                hovered ? "-translate-y-[80px] translate-x-4" : ""
            )}>L</CircleButton>
        </div>
    )
}

export default NavgationComponent