import { ReactNode } from "react";

interface TopNavigationProps {
    children: ReactNode;
}

export const LeftPopNavigation = ({ children }: TopNavigationProps) => {
    return (
        <div className="fixed w-16 p-4 -translate-y-1/2 bg-gray-200 rounded-lg top-1/2 left-2 h-min dark:bg-gray-800">
            {children}
        </div>
    );
};
