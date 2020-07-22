module.exports = {
    name: "invit",
    category: "info",
    description: "Let the bot create an invitation for you :).",
    run: async (bot, message, args)=>{
        message.channel.createInvite()
        .then(invite => message.channel.send(`here is your invit link => ${invite}`))
    }
}