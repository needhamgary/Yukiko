let {MessageEmbed} = require("discord.js")
module.exports = {
    name: "say",
    category: "moderation",
    description: "Let the bot talk with your voice!",
    run: async (bot, message, args)=>{
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('oy! dont tell me what to do!')
      if(message.deletable) message.delete();
      if(args[0] === "embed"){
          let sayEmbed = new MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setTitle(args.slice(1).join(' '))
          .setFooter(bot.user.username, bot.user.displayAvatarURL())
          .setTimestamp()
          message.channel.send(sayEmbed)
      }else{
          message.channel.send(args.join(' '))
      }
    }
}