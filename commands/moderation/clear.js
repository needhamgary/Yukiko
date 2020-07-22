module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clear a bunch of message at once.",
    run: async (bot, message, args)=>{
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You can't bulk delete those message!`);
      if(isNaN(args[0])) return message.reply('Please provide a number between 2 and 100');
      if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`Please gimme the permissions "MANAGE_MESSAGE"! so i can delete all those nasty messages :)`);
      let amount;
      if(parseInt(args[0]) > 100){
          amount = 100;
      }else{
          amount = parseInt(args[0])
      }
      if(message.deletable) message.delete()
      message.channel.bulkDelete(amount, true, true)
      .then(deleted => `${message.channel.send}(I've deleted ${deleted.size} messages!`)
    }
}