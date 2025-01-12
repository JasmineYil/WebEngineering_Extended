const express = require('express');
const axios = require('axios');
const { cache, CACHE_DURATION } = require('../utils/cache');
const router = express.Router();

const baseUrl = 'https://en.wikipedia.org/w/api.php';
const params = {
  action: 'parse',
  page: 'List_of_ursids',
  prop: 'wikitext',
  section: '3',
  format: 'json',
  origin: '*',
};

router.get('/', async (req, res) => {
  try {
    const isCacheValid = cache.data && (Date.now() - cache.timestamp < CACHE_DURATION);

    if (isCacheValid) {
      console.log('Serving bear data from cache');
      res.setHeader('X-Cache-Status', 'HIT');
      return res.json(cache.data);
    }

    console.log('Fetching new bear data from Wikipedia API');
    const response = await axios.get(baseUrl, { params });
    cache.data = response.data;
    cache.timestamp = Date.now();

    res.setHeader('X-Cache-Status', 'MISS');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching bear data:', error);
    res.status(500).json({ error: 'Failed to fetch bear data' });
  }
});

module.exports = router;