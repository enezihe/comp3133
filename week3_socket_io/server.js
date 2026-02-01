// dependencies: npm install express socket.io nodemon
// run: npx nodemon server.js

const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

// Serve static files from socket/views
app.use(express.static(path.join(__dirname, 'socket/views')));

// Load client.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'socket/views/client.html'));
});

// Start listening to server on PORT
const appServer = app.listen(SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${SERVER_PORT}/`);
});

// Associate appServer with socket server
const ioServer = socketio(appServer);

// Listen for connection event
ioServer.on('connection', (socket) => {
  console.log(`Client connected. Client ID : ${socket.id}`);

  // Listen for 'ping' event from client
  socket.on('ping', (data) => {
    console.log(`ON SERVER - PING - RECEIVED - with data : ${data}`);
  });

  // When client disconnected
  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} is disconnected`);
  });
});
