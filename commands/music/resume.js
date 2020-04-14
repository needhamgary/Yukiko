var ytdl = require("ytdl-core")
module.exports = {
    name: "resume",
    category: "music",
    description: "Resume the current video.",
    run: async (bot, message, args, ops) => {
        var guildIDData = ops.active.get(message.guild.id)
        if(!guildIDData) return message.reply("Nothing in the queue for now.");
        if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply("Hey, i'm busy in another channel right now. sorry!");
            
        if(!guildIDData.dispatcher.paused) return message.reply("Video is not paused.");
        guildIDData.dispatcher.resume();
        return message.reply(`***${guildIDData.queue[0].songTitle}*** is now resumed!`)
    }
}