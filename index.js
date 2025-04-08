const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => res.send('Aternos bot running!'));
app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

function startBot() {
  const bot = mineflayer.createBot({
    host: "hf324.aternos.me",
    port: 29849,
    username: "AFKMASTER",
    version: "1.21.4"
  });

  bot.on("spawn", () => {
    console.log("Bot joined the server!");
    setInterval(() => {
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 500);
    }, 10000);
  });

  bot.on("end", () => {
    console.log("Bot disconnected. Reconnecting in 5s...");
    setTimeout(startBot, 5000);
  });

  bot.on("error", err => {
    console.log("Bot error:", err.message);
  });
}

startBot();
