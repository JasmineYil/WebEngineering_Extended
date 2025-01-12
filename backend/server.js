const express = require('express');
const cors = require('cors');
const bearsRoute = require('./routes/bears');
const bearImageRoute = require('./routes/bearImage');

const app = express();
const PORT = 5000;

app.use(cors());

app.use('/api/bears', bearsRoute);
app.use('/api/bear-image', bearImageRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});