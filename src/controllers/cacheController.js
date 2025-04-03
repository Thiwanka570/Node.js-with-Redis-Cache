const { setCache, getCache, deleteCache } = require('../services/redisService')

const setData = async (req, res) => {
    try {
        const { key, value } = req.body;
        await setCache(key, value);
        res.status(200).json({ message: 'Data Caches Successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getData = async (req, res) => {
    try {
        const { key } = req.params;
        const data = await getCache(key);
        if (!data) {
            return res.status(404).json({ message: 'Data not found in cache' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const deleteData = async (req, res) => {
    try {
        const { key } = req.params;
        await deleteCache(key);
        res.status(200).json({ message: 'Data deleted from cache' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { getData, setData, deleteData };