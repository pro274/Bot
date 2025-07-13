const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'hf324.aternos.me', // Change if needed
    port: 25565,
    username: 'AFKBOT',
    version: '1.21.4'
  });

  bot.on('spawn', () => {
    console.log('✅ AFKBOT spawned on the server!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('Error:', err);
  });
}

createBot();
