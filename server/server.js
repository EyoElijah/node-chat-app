const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

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

    socket.emit('newMessage', {
        from: 'jane@yahoo.com',
        text: 'Hey,Eyo i just got a new macbook pro laptop',
        createdAt: 2322
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
    socket.on('createMessage', (message) => {
        console.log('Hey this is the message you just received', message);
    });
});



server.listen(port, () => {
    console.log(`server started at port ${port}`)
});