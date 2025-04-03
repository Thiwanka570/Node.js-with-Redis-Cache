const redis = require('redis')
require('dotenv').config()

const client = redis.createClient({
    socket: {
        host: "localhost",
        port: 6379
    }
});

client.on('error', (err) => console.log('Redis Client Error', err));

const connectRedis = async () => {
    await client.connect();
    console.log('Connected TO Redis');
}

module.exports = { client, connectRedis };