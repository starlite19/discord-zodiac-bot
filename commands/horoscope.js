module.exports = {
    name: "horoscope",
    aliases: ["hs"],
    cooldown: 5,
    permissions: [],
    description: "Gives the daily horoscope of the given sign",
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

        if (!(args.length == 1)) return message.reply("Please enter 1 zodiac sign");

        var sign = args[0].toLowerCase();
        if(sign === "aries"){
            message.channel.send("https://www.astrology.com/horoscope/daily/aries.html");
        } else if (sign === "taurus"){ 
            message.channel.send("https://www.astrology.com/horoscope/daily/taurus.html");
        } else if (sign === "gemini"){
            message.channel.send("https://www.astrology.com/horoscope/daily/gemini.html");
        } else if (sign === "cancer"){
            message.channel.send("https://www.astrology.com/horoscope/daily/cancer.html");
        } else if (sign === "leo"){
            message.channel.send("https://www.astrology.com/horoscope/daily/leo.html");
        } else if (sign === "virgo"){
            message.channel.send("https://www.astrology.com/horoscope/daily/virgo.html");
        } else if (sign === "libra"){
            message.channel.send("https://www.astrology.com/horoscope/daily/libra.html");
        } else if (sign === "scorpio"){
            message.channel.send("https://www.astrology.com/horoscope/daily/scorpio.html");
        } else if (sign === "sagittarius"){
            message.channel.send("https://www.astrology.com/horoscope/daily/sagittarius.html");
        } else if (sign === "capricorn"){
            message.channel.send("https://www.astrology.com/horoscope/daily/capricorn.html");
        } else if (sign === "aquarius"){
            message.channel.send("https://www.astrology.com/horoscope/daily/aquarius.html");
        } else if (sign === "pisces"){
            message.channel.send("https://www.astrology.com/horoscope/daily/pisces.html");
        } else {
            message.reply("Please enter a valid zodiac sign.");
        }
    }
}