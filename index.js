// ✅ index.js — Safe 24/7 Mineflayer Bot for Aternos (No chat, No ban)

const mineflayer = require('mineflayer');

function createBot() { const bot = mineflayer.createBot({ host: 'hf324.aternos.me', // ✅ Change to your Aternos IP username: 'Steve_' + Math.floor(Math.random() * 1000), // Random name to avoid ban version: '1.21.4' // ✅ Your Minecraft server version });

bot.once('spawn', () => { console.log('✅ Bot connected!');

// Anti-AFK: Jump + Move + Rotate every 10 seconds
setInterval(() => {
  const yaw = Math.random() * Math.PI * 2;
  bot.look(yaw, 0, true); // Random head turn

  bot.setControlState('forward', true);
  bot.setControlState('jump', true);

  setTimeout(() => {
    bot.setControlState('forward', false);
    bot.setControlState('jump', false);
  }, 1000);
}, 10000);

});

bot.on('end', () => { console.log('❌ Bot disconnected. Reconnecting...'); setTimeout(createBot, 5000); });

bot.on('error', (err) => { console.log('⚠️ Bot error:', err.message); }); }

createBot();

