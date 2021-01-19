const socket = io(); 										// accessable via server side 	[ const io = socketIO( server ) 	]

socket.on('connect', () => {
	console.log('Client Connected');
});

socket.on('disconnect', () => {
	console.log('Server Disconnected');
});
