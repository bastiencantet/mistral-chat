import {ChatMessage} from "@/types/types";

interface ChatDisplayProps {
    messages: ChatMessage[];
}


export function ChatDisplay({messages}: ChatDisplayProps) {
    return (
        <div className=" justify-end w-full h-full flex flex-col">
            {messages.map((message, index) => (
                <div key={index} className={`w-96 ${message.kind === 'user' ? 'self-end' : 'self-start'}`}>
                    <div className={`rounded-lg p-2 ${message.kind === 'user' ? 'bg-blue-800' : 'bg-gray-800'}`}>
                        {message.message}
                    </div>
                </div>
            ))}
        </div>
    );
}
