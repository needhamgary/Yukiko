module.exports = {
    name: "ping",
    category: "info",
    description: "Tell you the ping between discord and the bot.",
    run: async (bot, message, args)=>{
        let msg = await message.channel.send('Ping...');
        msg.edit(`Latency: ${Math.floor(msg.createdAt - message.createdAt)}ms`);
    }
}