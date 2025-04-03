const express = require('express')
const { connectRedis } = require('./config/redis')
const { setData, getData, deleteData } = require('./controllers/cacheController')

const app = express();
app.use(express.json());

connectRedis();

app.post('/cache', setData);
app.get('/cache/:key', getData);
app.delete('/cache/:key', deleteData);

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})