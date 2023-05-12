import { useState } from "react"
import TextInput from "../../elements/TextInput"
import Button from "../../elements/Button"

const ChatForm = () => {
    const [message, setMessage] = useState<string>("")

    return (
        <div className="flex mt-auto">
            <TextInput value={message} onChange={setMessage} />
            <Button className="ml-2" onClick={() => { }}>
                Send
            </Button>
        </div>
    )
}

export default ChatForm