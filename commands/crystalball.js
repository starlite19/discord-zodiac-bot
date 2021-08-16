module.exports = {
    name: "crystalball",
    aliases: ["cb"],
    cooldown: 5,
    permissions: [],
    description: "Ask a yes or no question and receive a response.",
    execute(client, message, cmd, args, Discord) {
        //should only send this command to zodiac channel, will delete message if not
        const channel = message.guild.channels.cache.find(c => c.id === "849704430693515274");
        if (!(channel == message.channel)) return message.reply(`Please use the command in the ${channel.name} channel`)
            .then((msg) => {
                setTimeout(() => {
                    msg.delete();
                    message.delete();
                }, 5000);
            });
        
        if(!(args.length > 0)) return message.reply("Please ask a question.");
        var res = ["Yes", "No", "Maybe", "For certain", "Most likely", "Ask again later", "Better not tell you now", "Cannot predict now", "Very doubtful", "Don't count on it"];
        
        var index = Math.floor(Math.random() * (res.length + 1))
        message.channel.send(res[index]);

    }
}