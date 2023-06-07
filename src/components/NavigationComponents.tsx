import { useState } from "react"
import Avatar from "../elements/Avatar"
import CircleButton from "../elements/CircleButton"
import { ReactComponent as WorldIcon } from "../assets/icons/common/world.svg"
import { ReactComponent as ForwardBurgerIcon } from "../assets/icons/common/forward-burger.svg"
import clsx from "clsx"

const NavgationComponent = () => {
    return (
        <div className="relative">
            <Avatar size="xl" className="relative z-10" src="/images/avatars/1.png" />
            <CircleButton size="md" className={clsx("absolute z-0 text-[10px]",
                "top-0 left-16 ml-2"
            )}>
                <WorldIcon className="fill-current" />
            </CircleButton>

            <CircleButton size="md" className={clsx("absolute z-0 text-[10px]",
                "top-16 mt-2"
            )}>
                <ForwardBurgerIcon className="fill-current" />
            </CircleButton>
            <CircleButton size="md" className={clsx("absolute z-0 text-[10px]",
                "top-16 left-16 -ml-2 -mt-2"
            )}>

            </CircleButton>
        </div>
    )
}

export default NavgationComponent