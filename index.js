  const express = require('express');
  const app = express();
  const http = require('http').createServer(app);
  const io = require('socket.io')(http);

  app.use(express.static('.'));

  io.on('connection', socket => {
    console.log('A user connected');

    socket.on('chat message', msg => {
      io.emit('chat message', msg); // Send to everyone
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  http.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
