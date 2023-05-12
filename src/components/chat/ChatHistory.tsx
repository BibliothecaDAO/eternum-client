import ChatMessage, { ChatMessageProps } from "../../elements/ChatMessage";

interface ChatHistoryProps {
    messages: ChatMessageProps[];
}

const ChatHistory = (props: ChatHistoryProps) => {

    return (
        <div className="flex flex-col h-full overflow-auto">
            {props.messages.map((message, index) => (
                <ChatMessage key={index} {...message} />
            ))}
        </div>
    )
}

export default ChatHistory