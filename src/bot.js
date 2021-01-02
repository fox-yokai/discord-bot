require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client({
    partials: ['MESSAGE', 'REACTION']
});

client.login(process.env.DISCORD_BOT_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if(reaction.message.id === '794755067513012226') {
        switch (name) {
            case '1️⃣':
                member.roles.add('794755438846410752')
                break;
            case '2️⃣':
                member.roles.add('794755661912604682')
                break;
            case '3️⃣':
                member.roles.add('794755709803298819')
                break;
            case '4️⃣':
                member.roles.add('794755772961390653')
                break;
            case '5️⃣':
                member.roles.add('794756126767185964')
                break;
        }
    }
});

client.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id)
    if(reaction.message.id === '794755067513012226') {
        switch (name) {
            case '1️⃣':
                member.roles.remove('794755438846410752')
                break;
            case '2️⃣':
                member.roles.remove('794755661912604682')
                break;
            case '3️⃣':
                member.roles.remove('794755709803298819')
                break;
            case '4️⃣':
                member.roles.remove('794755772961390653')
                break;
            case '5️⃣':
                member.roles.remove('794756126767185964')
                break;
        }
    }
});