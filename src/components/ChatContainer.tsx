'use client'

import {ChatDisplay} from "@/components/chat-display";
import {ChatInput} from "@/components/chat-input";
import React from "react";
import {ChatMessage} from "@/types/types";
import {MistralClient} from "@/helper/mistral";
import {ChatLoading} from "@/components/chat-loading";

export function ChatContainer() {

    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    const mistralClient = new MistralClient();

    const handleSendMessage = (message: string) => {
        setMessages([...messages, { message: message, kind: 'user' }]);
        setLoading(true);
        mistralClient.getChatResponse('open-mistral-nemo', message).then((response) => {
            setLoading(false);
            setMessages([...messages, { message: message, kind: 'user' },{ message: response, kind: 'bot' }]);
        });
    }


    return (
        <>
            <ChatDisplay messages={messages} />
            <ChatLoading loading={loading}/>
            <ChatInput handleSendMessage={handleSendMessage}/>
        </>
    );
}
