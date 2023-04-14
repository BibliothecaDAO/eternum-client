import { ReactNode } from "react";

interface TopNavigationProps {
    children: ReactNode;
}

export const LeftPopNavigation = ({ children }: TopNavigationProps) => {
    return (
        <div className="fixed top-0 left-0 w-64 h-full p-4 transition-all duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 md:w-48 lg:w-64">
            {children}
        </div>
    );
};
