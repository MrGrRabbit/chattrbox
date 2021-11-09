const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const port = 3001;
const ws = new WebSocketServer({
    port: port
});

let message = [];

console.log('websocket server started');

ws.on('connection', function (socket) {
    console.log('client connection established');

    message.forEach(function (msg) {
        socket.send(msg);
    })

    socket.on('message', function (data) {
        console.log('message receives: ' + data);
        message.push(data);
        ws.clients.forEach(function (clientSocket) {
            clientSocket.send(data);
        });
    });
});

