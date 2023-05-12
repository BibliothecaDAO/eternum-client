const ContentContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute w-1/4 translate-y-1/2 left-6 bottom-1/2">
            {children}
        </div>
    );
};

export default ContentContainer;