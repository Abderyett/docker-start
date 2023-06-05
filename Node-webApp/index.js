const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello there!');
});

app.listen(5000, () => {
	console.log('listening to port 5000 ...');
});