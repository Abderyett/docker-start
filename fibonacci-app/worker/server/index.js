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
