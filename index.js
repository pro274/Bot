const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'hf324.aternos.me', // ✅ Replace with your Aternos IP
    username: 'Steve_' + Math.floor(Math.random() * 1000), // ✅ Random legit username
    version: '1.21.4' // ✅ Your Minecraft server version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot spawned and connected!');

    // Anti-AFK movement: walk + jump + random look
    setInterval(() => {
      // Randomly rotate head
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true);

      // Walk and jump
      bot.setControlState('forward', true);
      bot.setControlState('jump', true);

      // Stop after 1 second
      setTimeout(() => {
        bot.setControlState('forward', false);
        bot.setControlState('jump', false);
      }, 1000);
    }, 10000); // every 10 sec
  });

  // Reconnect if disconnected
  bot.on('end', () => {
    console.log('❌ Disconnected! Reconnecting in 5 seconds...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Error:', err.message);
  });
}

createBot();
