import clsx from "clsx";

const CircleButton = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <button className={clsx("flex hover:scale-105 transition-transform duration-100 cursor-pointer items-center justify-center w-12 h-12 bg-black/60 text-white/70 rounded-full shadow-md border-2 border-white/10 shadow-black/50", className)}>
            {children}
        </button>
    );
};

export default CircleButton;