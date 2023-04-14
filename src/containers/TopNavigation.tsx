import { ReactNode } from "react";

interface TopNavigationProps {
  children: ReactNode;
}

export const TopNavigation = ({ children }: TopNavigationProps) => {
  return (
    <div className="absolute top-0 w-full h-16 bg-black">
      {children}
    </div>
  );
};
