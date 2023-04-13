import { ReactNode } from "react";

interface TopNavigationProps {
    children: ReactNode;
}

export const LeftPopNavigation = ({ children }: TopNavigationProps) => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 p-4 bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out md:w-48 lg:w-64">
            {children}
        </div>
    );
};
