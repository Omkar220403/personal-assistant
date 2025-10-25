import MessageInput from "./MessageInput"

const ChatWindow = () => {
    return (
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col items-center space-y-4">
                    <div className="text-3xl font-bold mb-4">
                        Hello! How can I assist you today?
                    </div>

                    <MessageInput />
                </div>
            </div>
        </div>
    )
}
export default ChatWindow;