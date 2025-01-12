const express = require('express');
const axios = require('axios');
const { imageCache, CACHE_DURATION } = require('../utils/cache');
const router = express.Router();

const baseUrl = 'https://en.wikipedia.org/w/api.php';

router.get('/', async (req, res) => {
  const { fileName } = req.query;

  if (!fileName) {
    return res.status(400).json({ error: 'fileName parameter is required' });
  }

  const isImageCached = imageCache[fileName] && (Date.now() - imageCache[fileName].timestamp < CACHE_DURATION);

  if (isImageCached) {
    console.log(`Serving image ${fileName} from cache`);
    res.setHeader('X-Cache-Status', 'HIT');
    return res.json(imageCache[fileName].data);
  }

  try {
    console.log(`Fetching new image ${fileName} from Wikipedia API`);
    const response = await axios.get(baseUrl, {
      params: {
        action: 'query',
        titles: `File:${fileName}`,
        prop: 'imageinfo',
        iiprop: 'url',
        format: 'json',
        origin: '*',
      },
    });

    imageCache[fileName] = {
      data: response.data,
      timestamp: Date.now(),
    };

    res.setHeader('X-Cache-Status', 'MISS');
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching image ${fileName}:`, error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

module.exports = router;