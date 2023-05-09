export interface ChatMessageProps {
    sender: string;
    message: string;
    avatar: string;
    timestamp: string;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { sender, message, avatar, timestamp } = props;

    return (
        <div className="flex flex-col mb-2 select-none">
            <div className="flex">
                <div className="w-8 h-8 mr-2 overflow-hidden rounded-full bg-white/20">
                    <img draggable={false} src={avatar} alt="avatar" className="w-full h-full" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between text-[10px] text-white/30">
                        <div>{sender}</div>
                        <div>{timestamp}</div>
                    </div>
                    <div className="text-xs text-white/70">{message}</div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;