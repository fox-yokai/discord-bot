require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  