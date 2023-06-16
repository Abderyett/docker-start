const {
	redisHost,
	redisPort,
	pgDatabase,
	pgHost,
	pgPassword,
	pgUser,
	pgPort,
} = require('./keys');

//Express App setup
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Postgres Client setup

const { pool } = require('pg');

const pgClient = new Pool({
	user: pgUser,
	host: pgHost,
	port: pgPort,
	database: pgDatabase,
	password: pgPassword,
});

pgClient.on('error', (err) => console.log('Lost PG Connection...'));

pgClient
	.query('CREATE TABLE IF NOT EXISTS values (number INT)')
	.catch((err) => console.log('Tbale has not been created ...', err));

// Redis Client setup

const redis = require('redis');

const redisClient = redis.createClient({
	hsot: redisHost,
	port: redisPort,
	retry_strategy: () => 1000,
});

const redisPublisher = redisClient.duplicate();

//Express routes

app.get('/', (req, res) => {
	res.send('working');
});

app.get('/values/all', async (req, res) => {
	const values = await pgClient.query('SELECT * FROM values');

	res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
	redisClient.hgetall('values', (err, values) => {
		res.send(values);
	});
});

app.post('/values', async (req, res) => {
	const index = req.params.index;

	if (parseInt(index) > 40) {
		res.status(422).send('Index too High!');
	}
	redisClient.hset('value', index, 'Nothing yet!');
	redisPublisher.publish('insert', index);
	pgClient.query(
		'INSERT INTO values(number) VALUES(1$)',
		[index],
		(err, res) => {
			if (err) {
				console.error(err);
			} else {
				console.log('Data inserted successfully', res);
			}
		}
	);

	res.send('Fib is Working!');
});

app.listen(5000, () => console.log('Listening to port 5000 ...'));
