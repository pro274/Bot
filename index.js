const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'hf324.aternos.me',
    username: 'BlockBender'
    version: '1.21.4'
  });

  bot.once('spawn', () => {
    console.log('✅ Bot connected!');
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true);
      bot.setControlState('forward', true);
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('forward', false);
        bot.setControlState('jump', false);
      }, 1000);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Bot error:', err.message);
  });
}
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(3000, () => console.log('Web server running!'));

createBot();
