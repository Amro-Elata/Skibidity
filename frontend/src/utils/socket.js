import { io } from 'socket.io-client';

// Purpose: Set up WebSocket client
const socket = io('http://localhost');

export const sendMessage = (message) => {
    socket.emit('message', message);
};

export const subscribeToMessages = (callback) => {
    socket.on('message', callback);
};

export const disconnectSocket = () => {
    socket.disconnect();
};

// To develop further: Add event listeners for connection state changes and error handling.
