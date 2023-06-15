const { redisHost, redisPort } = require('./keys');

const redis = require('redis');

const rediClient = redis.createClient({
	host: redisHost,
	port: redisPort,
	retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

function fib(index) {
	if (index < 2) return index;
	return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
	rediClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
