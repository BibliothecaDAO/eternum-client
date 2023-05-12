import { ReactNode } from "react";

interface TopRightContainerProps {
    children?: ReactNode;
}

export const TopRightContainer = ({ children }: TopRightContainerProps) => {
    return (
        <div className="absolute top-0 right-0 z-10 w-1/3 h-56">
            {children}
        </div>
    );
};

export default TopRightContainer;