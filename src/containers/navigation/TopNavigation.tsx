import { ReactNode } from "react";

interface TopNavigationProps {
  children: ReactNode;
}

export const TopNavigation = ({ children }: TopNavigationProps) => {
  return (
    <div className="fixed h-16 p-2 bg-gray-200 rounded-lg dark:bg-gray-800 top-2 left-2">
      {children}
    </div>
  );
};
