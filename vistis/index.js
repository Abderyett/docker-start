const express = require('express');
const redis = require('redis');
const app = express();

const redisClient = redis.createClient({
	legacyMode: true,
});

redisClient
	.connect()
	.then((res) => {
		console.log('connected');
	})
	.catch((err) => {
		console.log('Oh no an ERROR!!' + err);
	});

redisClient.set('visits', 0);

app.get('/', function (req, res) {
	redisClient.get('visits', function (err, numVisits) {
		res.send('Number of visits: ' + numVisits);
		redisClient.set('visits', parseInt(numVisits) + 1);
	});
});

app.listen(5000, function () {
	console.log('Web app is listening on port 5000');
});
