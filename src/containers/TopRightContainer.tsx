import { ReactNode } from "react";

interface TopRightContainerProps {
    children?: ReactNode;
}

export const TopRightContainer = ({ children }: TopRightContainerProps) => {
    return (
        <div className="absolute w-1/3 h-56 top-6 right-6">
            {children}
        </div>
    );
};

export default TopRightContainer;