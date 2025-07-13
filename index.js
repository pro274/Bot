const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Mineflayer bot start
function startBot() {
  const bot = mineflayer.createBot({
    host: 'hf324.aternos.me',
    port: 31563,
    username: 'AFKBOT',
    version: '1.21.4'
  });

  bot.once('spawn', () => {
    console.log('Bot spawned!');
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err);
  });
}

startBot();

// Express app for keeping port open (IMPORTANT FOR RENDER)
app.get('/', (req, res) => {
  res.send('Minecraft bot is running.');
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});
