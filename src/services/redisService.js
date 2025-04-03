const { client } = require('../config/redis');

const setCache = async (key, value, ttl = 3600) => {
    await client.set(key, JSON.stringify(value), { EX: ttl });
};

const getCache = async (key) => {
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
}

const deleteCache = async (key) => {
    await client.del(key);
}

module.exports = { setCache, getCache, deleteCache }