// src/ChatApp.jsx

import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Doc from './page/doc';

const SOCKET_SERVER_URL = 'http://localhost:3000'; // Replace with your server URL
const socket = io(SOCKET_SERVER_URL, {
  transports: ['websocket'], // Ensures WebSocket transport
});

const App = () => {
  return <Doc />
};

export default App;
