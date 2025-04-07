const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'hf324.aternos.me',
  port: 25565,
  username: 'Bot',
  version: '1.21.4',
});

bot.on('spawn', () => {
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000);
});