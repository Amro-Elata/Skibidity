import React, { useState, useEffect } from 'react';
import { sendMessage, fetchMessages } from '../utils/api';

// Purpose: Chat functionality for the app
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const fetchedMessages = await fetchMessages();
                setMessages(fetchedMessages);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        loadMessages();
    }, []);

    const handleSend = async () => {
        if (!message.trim()) return;
        try {
            await sendMessage(message);
            const updatedMessages = await fetchMessages();
            setMessages(updatedMessages);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, idx) => (
                    <div key={idx}>{msg.content}</div>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chat;

// To develop further: Add real-time updates using WebSocket, typing indicators, and user mentions.
