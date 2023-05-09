import clsx from "clsx"

const Avatar = ({ src, className }: { src: string, className?: string }) => {
    return (
        <img draggable={false} src={src} alt="avatar" className={clsx("object-contain rounded-full border-2 border-white/10 border-solid", className)} />
    );
};

export default Avatar;