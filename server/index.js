const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.resolve( __dirname, '../public');

const app = express();
const server = http.createServer( app );
const io = socketIO( server ); 												// This io function will be accessable  by client's js.

io.on('connection', (socket) => {
	console.log('New User Connected');

	socket.on('disconnect', () => {
		console.log('Close User Connected');
	});

});






app.use( express.static(publicPath) );
server.listen( port, () => console.log( `Server is running on port ${port}`) );
