import { ReactNode } from "react";
import { BaseContainer } from "./BaseContainer";

interface BottomRightContainerProps {
    children?: ReactNode;
}

export const BottomRightContainer = ({ children }: BottomRightContainerProps) => {
    return (
        <BaseContainer className="absolute w-1/3 h-56 bottom-6 right-6 container-bg-gradient backdrop-blur-sm">
            {children}
        </BaseContainer>
    );
};
