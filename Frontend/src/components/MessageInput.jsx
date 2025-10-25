import { FiPlus, FiSend } from "react-icons/fi";

const MessageInput = () => {
    return (
        <div className="w-full max-w-lg mt-6">
            <div className="flex items-center bg-coffee-light dark:bg-coffee-dark border border-coffee-dark/30 dark:border-coffee-light/20 rounded-full p-2 shadow-sm">
                {/* Attachment Button */}
                <button className="p-2 rounded-full hover:bg-coffee-medium/20 dark:hover:bg-coffee-light/10 transition">
                    <FiPlus size={22} className="text-coffee-dark dark:text-coffee-light" />
                </button>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-coffee-dark dark:text-coffee-light focus:outline-none p-2"
                />

                {/* Send Button */}
                <button className="p-2 rounded-full hover:bg-coffee-medium/20 dark:hover:bg-coffee-light/10 transition">
                    <FiSend size={22} className="text-coffee-dark dark:text-coffee-light" />
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
