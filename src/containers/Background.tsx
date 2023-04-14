// Description: Background container
// Full width and full height background container


import { ReactNode } from "react";

interface BottomNavigationProps {
    children: ReactNode;
}

export const Background = ({ children }: BottomNavigationProps) => {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
};
