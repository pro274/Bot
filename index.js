const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running on Render!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Web server is running on port ${PORT}`);
});
