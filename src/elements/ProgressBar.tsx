interface ProgressBarProps {
    progress: number;
    children: React.ReactNode;
}
const ProgressBar = ({ progress, children }: ProgressBarProps) => {
    return (
        <div className="w-full h-4 rounded-md bg-green-100/50">
            <div className="flex items-center justify-center h-4 text-[10px] text-white rounded-md bg-green-600/50" style={{ width: `${progress}%` }}>
                {children}
            </div>
        </div>
    );
};

export default ProgressBar;