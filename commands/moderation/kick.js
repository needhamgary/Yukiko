const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "kick",
    category: "moderation",
    description: "temp kick.",
    run: async (bot, message, args)=>{
        if(!args[0]) return message.reply("please Let me know who i should kick.");
        if(!args[1]) return message.reply("Please provide a reason for that kick.");
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have the permissions to kick "+args[1]+".");
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't have the permissions to kick anyone. please make sure to give it to me.");
        let tokick = message.mentions.members.first() || message.fuild.members.get(args[0]);
        if(!tokick) return message.channel.send(`I can't find the user ${args[0]}. Please double check.`);
        if(tokick.id === message.author.id) return message.channel.send("You can't kick yourself.");
        if(bot.user.id === tokick.id) return message.channel.send("Oy! don't kick me!");
        if(!tokick.kickable) return message.channel.send("You can't kick that user. he/she is better than u :)");
        let kickEmbed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setTitle(`${message.author.username} just kicked ${tokick.user.username}`)
        .setDescription(`the reason is: ${args.slice(1).join(' ')}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter(bot.user.username, bot.user.displayAvatarURL())
        .setColor('RED')
        message.channel.send(kickEmbed)
        tokick.kick(args.slice(1).join(' '));
    }
}