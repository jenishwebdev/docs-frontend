import io from 'socket.io-client';

export const socket = io(import.meta.env.VITE_SOCKET_SERVER_URL, {
  transports: ['websocket'], // Ensures WebSocket transport
});
