const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve client files from socket/views
app.use(express.static(path.join(__dirname, 'socket/views')));

// Serve the main UI
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'socket/views/client.html'));
});

// Start HTTP server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Attach Socket.IO to the server
const serverIO = require('socket.io')(server);

// Handle Socket.IO connections
serverIO.on('connection', (socket) => {
  console.log(`A new user connected: ${socket.id}`);

  // Send client id to the client (for UI display)
  socket.emit('client-id', socket.id);

  // Basic ping
  socket.on('ping-server', (payload) => {
    console.log(`Ping received from ${socket.id}`, payload);
    socket.emit('pong-client', { message: 'pong', from: 'server' });
  });

  // Global chat message
  socket.on('chat-message', (payload) => {
    const message =
      typeof payload === 'string' ? payload : payload?.message;

    console.log(`Chat message from ${socket.id}:`, message);

    serverIO.emit('chat-broadcast', {
      sender: socket.id,
      message,
      time: new Date().toISOString(),
    });
  });

  // Feedback event
  socket.on('send-feedback', (payload) => {
    console.log(`Feedback from ${socket.id}:`, payload);

    serverIO.emit('feedback-broadcast', {
      sender: socket.id,
      category: payload?.category,
      message: payload?.message,
      time: new Date().toISOString(),
    });
  });

  // Generic message echo (kept from your original)
  socket.on('message', (data) => {
    console.log('Message received:', data);
    socket.emit('message', data);
  });

  // Rooms / group chat
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room: ${room}`);
    socket.emit('room-joined', room);
  });

  socket.on('roomMessage', ({ room, message }) => {
    console.log(`Message to room ${room}: ${message}`);
    socket.broadcast.to(room).emit('roomMessage', {
      sender: socket.id,
      room,
      message,
    });
  });

  socket.on('leaveRoom', (room) => {
    socket.leave(room);
    console.log(`User ${socket.id} left room: ${room}`);
    socket.emit('room-left', room);
  console.log('RUNNING SERVER.JS FROM:', __filename);
});


  // Disconnect
  socket.on('disconnect', () => {
    console.log(`A user disconnected: ${socket.id}`);
  });
});
