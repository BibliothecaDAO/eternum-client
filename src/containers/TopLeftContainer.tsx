import { ReactNode } from "react";

export const TopLeftContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute top-0 z-10 w-1/3 h-56 left-8">
            {children}
        </div>
    );
};

export default TopLeftContainer;