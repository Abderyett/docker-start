const express = require('express');
const redis = require('redis');
const app = express();

const redisClient = redis.createClient({
	legacyMode: true,
	host: 'redisClient',
	port: 6379,
});

redisClient
	.connect()
	.then(async (res) => {
		console.log('connected');
	})
	.catch((err) => {
		console.log('Oh no an ERROR!!' + err);
	});

app.get('/', function (req, res) {
	redisClient.get('numVisits', function (err, numVisits) {
		numVisitsToDisplay = parseInt(numVisits) + 1;
		if (isNaN(numVisitsToDisplay)) {
			numVisitsToDisplay = 1;
		}
		res.send('web1: Total number of visits is: ' + numVisitsToDisplay);
		numVisits++;
		redisClient.set('numVisits', numVisits);
	});
});

app.listen(5000, function () {
	console.log('Web app is listening on port 5000');
});
