import {useState} from "react";
import {Button} from "@/components/generic/buttons/button";




export function ChatInput({handleSendMessage} : Readonly<{handleSendMessage: (message: string) => void;}>) {

    const [message, setMessage] = useState('');


    return (
        <div className='flex gap-6 w-full max-w-screen-2xl sticky bottom-0'>
            <input className='w-full p-2 bg-gray-800 text-white rounded-lg' type='text' placeholder='Type a message...' value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={() => handleSendMessage(message)}>Send</Button>
        </div>
    );
}
