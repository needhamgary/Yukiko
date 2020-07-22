const {Client, MessageEmbed, Collection} = require('discord.js');
const Config = require('./config.json');
const bot = new Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.commands = new Collection();
bot.category = new Collection();
["commands"].forEach(handler =>{
    require(`./handler/${handler}`)(bot)
})
bot.on('guildMemberAdd', async (member)=>{
    let channel = member.guild.channels.cache.find(channel => channel.name === "general");
    channel.send(`Welcome ${member.user}`)
});
bot.on('guildMemberRemove', async (member)=>{
    let channel = member.guild.channels.cache.find(channel => channel.name === "general");
    channel.send(`${member.user.username} left the server :c`)
});
bot.on('message', async message => {
    let prefix = Config.prefix;
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return
    if(message.author.bot == true) return
    let commandFile =  bot.commands.get(messageArray[0].slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args)
});

bot.login(Config.token);