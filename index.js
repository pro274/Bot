const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is running and server is live!');
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

const bot = mineflayer.createBot({
  host: 'hf324.aternos.me',
  port: 25565,
  username: 'Bot',
  version: '1.21.4',
});

bot.on('spawn', () => {
  console.log('Bot spawned!');
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000);
});

bot.on('end', () => {
  console.log('Bot disconnected, trying to reconnect...');
  setTimeout(() => {
    require('child_process').fork(__filename);
  }, 5000);
});
