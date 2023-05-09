import Avatar from "./Avatar";

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
            <div className="flex items-center">
                <Avatar src={avatar} className="w-6 h-6 mr-2 border-none" />
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