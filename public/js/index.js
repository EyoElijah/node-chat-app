let socket = io();

socket.on('connect', function() {
    console.log('connected to server');
    socket.emit('createMessage', {
        from: 'Matthew@testcase01.com',
        text: 'Hey, Eyo what a wonderful way to live, doing what you love to do'
    });
});
socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('new Message received', message)
});