const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ban",
    category: "moderation",
    description: "temp ban.",
    run: async (bot, message, args)=>{
        if(!args[0]) return message.reply("please Let me know who i should ban.");
        if(!args[1]) return message.reply("Please provide a reason for that ban.");
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the permissions to ban "+args[1]+".");
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I don't have the permissions to ban anyone. please make sure to give it to me.");
        let toban = message.mentions.members.first() || message.fuild.members.get(args[0]);
        if(!toban) return message.channel.send(`I can't find the user ${args[0]}. Please double check.`);
        if(toban.id === message.author.id) return message.channel.send("You can't ban yourself.");
        if(bot.user.id === toban.id) return message.channel.send("Oy! don't ban me!");
        if(!toban.bannable) return message.channel.send("You can't ban that user. he/she is better than u :)");
        let banEmbed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle(`${message.author.username} just baned ${toban.user.username}`)
        .setDescription(`the reason is: ${args.slice(1).join(' ')}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setColor('RED')
        message.channel.send(banEmbed)
        toban.ban(args.slice(1).join(' '));
    }
}