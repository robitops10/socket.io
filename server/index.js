const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve( __dirname, '../public');

const port = process.env.PORT || 3000;

app.use( express.static(publicPath) );


app.get('/', (req, res ) => {
	console.log(  express.static(path.resolve( '../public')) 	)
	res.status(200).send('Hello Server');
});

app.listen( port, () => console.log( `Server is running on port ${port}`) );
