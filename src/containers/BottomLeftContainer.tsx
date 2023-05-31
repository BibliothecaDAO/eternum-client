const BottomLeftContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute left-6 bottom-10">
            {children}
        </div>
    );
};

export default BottomLeftContainer;