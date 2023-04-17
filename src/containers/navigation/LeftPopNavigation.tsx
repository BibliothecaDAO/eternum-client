import { ReactNode } from "react";

interface TopNavigationProps {
    children: ReactNode;
}

export const LeftPopNavigation = ({ children }: TopNavigationProps) => {
    return (
        <div className="fixed z-10 flex flex-col p-4 -translate-y-1/2 bg-gray-200 rounded-lg min-w-16 top-1/2 left-2 h-min dark:bg-gray-800">
            {children}
        </div>
    );
};
