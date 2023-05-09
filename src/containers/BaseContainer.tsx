import { ReactNode } from "react";
import clsx from 'clsx'

interface BaseContainerProps {
    children?: ReactNode;
    className?: string;
}

export const BaseContainer = ({ children, className }: BaseContainerProps) => {
    return (
        <div className={clsx("p-2 flex shadow-black/30 shadow-md flex-col border-2 border-white border-solid border-opacity-20 rounded-xl  container-bg-gradient backdrop-blur-sm overflow-hidden", className)}>
            {children}
            <div className="absolute top-0 left-0 z-0 w-full h-full pointer-events-none rounded-xl flower-pattern"></div>
        </div>
    );
};
