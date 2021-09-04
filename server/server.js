const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

const { generateMessage } = require('./utils/message');

const port = process.env.PORT || 5000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send('this is the home page');
});

io.on('connection', (socket) => {
    console.log('New User Connected')

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));

    });
    socket.emit('newMessage', generateMessage('Admin', 'welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user joined'));

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


server.listen(port, () => {
    console.log(`server started at port ${port}`)
});