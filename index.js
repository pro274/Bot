
const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// 🌐 Web server for UptimeRobot
app.get('/', (req, res) => res.send('✅ BlockBender Bot is running!'));
app.listen(3000, () => console.log('🌐 Web server running on port 3000'));

// 🤖 Create the bot
function createBot() {
  const bot = mineflayer.createBot({
    host: 'hf324.aternos.me',
    port: 31563,
    username: 'BlockBender',
    version: '1.21.4'
  });

  bot.once('spawn', () => {
    console.log('✅ BlockBender connected to Aternos server!');

    // 🚶 Anti-AFK movement every 10 sec
    setInterval(() => {
      if (!bot.player || !bot.entity) return;

      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true);

      const directions = ['forward', 'back', 'left', 'right'];
      const move = directions[Math.floor(Math.random() * directions.length)];

      bot.setControlState(move, true);
      bot.setControlState('jump', true);

      setTimeout(() => {
        bot.setControlState(move, false);
        bot.setControlState('jump', false);
      }, 3000);
    }, 10000);
  });

  // 🔁 Auto-reconnect
  bot.on('end', () => {
    console.log('❌ BlockBender disconnected. Reconnecting in 5 sec...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Bot error:', err.message);
  });

  bot.on('kicked', (reason) => {
    console.log('🚫 BlockBender was kicked:', reason);
  });
}

createBot();
