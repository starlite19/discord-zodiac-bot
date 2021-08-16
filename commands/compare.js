module.exports = {
    name: "compare",
    aliases: [],
    cooldown: 5,
    permissions: [],
    description: "Gives love compatibility between 2 signs",
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

        if (!(args.length == 2)) return message.reply("Please enter 2 zodiac signs");

        var g = "Great Match ❤️";
        var f = "Favourable Match 👍";
        var n = "Not Favourable ❌";
        var aries = {
            "aries": g, "leo": g, "sagittarius": g, "taurus": n, "virgo": f, "capricorn": n, "gemini": g,
            "libra": g, "aquarius": g, "cancer": n, "scorpio": n, "pisces": f
        };

        var leo = {
            "aries": g, "leo": g, "sagittarius": g, "taurus": f, "virgo": n, "capricorn": n, "gemini": g,
            "libra": g, "aquarius": f, "cancer": f, "scorpio": f, "pisces": f
        };

        var sag = {
            "aries": g, "leo": g, "sagittarius": g, "taurus": n, "virgo": n, "capricorn": n, "gemini": g,
            "libra": g, "aquarius": g, "cancer": f, "scorpio": f, "pisces": f
        };

        var taurus = {
            "aries": n, "leo": f, "sagittarius": n, "taurus": g, "virgo": g, "capricorn": g, "gemini": n,
            "libra": f, "aquarius": n, "cancer": g, "scorpio": g, "pisces": g
        };

        var virgo = {
            "aries": n, "leo": f, "sagittarius": n, "taurus": g, "virgo": g, "capricorn": g, "gemini": n,
            "libra": n, "aquarius": f, "cancer": g, "scorpio": g, "pisces": f
        };

        var cap = {
            "aries": n, "leo": f, "sagittarius": n, "taurus": g, "virgo": g, "capricorn": g, "gemini": n,
            "libra": f, "aquarius": n, "cancer": g, "scorpio": g, "pisces": g
        };

        var gem = {
            "aries": g, "leo": g, "sagittarius": f, "taurus": n, "virgo": f, "capricorn": f, "gemini": g,
            "libra": g, "aquarius": g, "cancer": n, "scorpio": n, "pisces": n
        };

        var lib = {
            "aries": f, "leo": g, "sagittarius": g, "taurus": f, "virgo": n, "capricorn": n, "gemini": g,
            "libra": g, "aquarius": g, "cancer": n, "scorpio": n, "pisces": f
        };

        var aquarius = {
            "aries": g, "leo": g, "sagittarius": g, "taurus": n, "virgo": n, "capricorn": n, "gemini": g,
            "libra": g, "aquarius": g, "cancer": n, "scorpio": f, "pisces": f
        };

        var can = {
            "aries": n, "leo": f, "sagittarius": f, "taurus": g, "virgo": g, "capricorn": g, "gemini": n,
            "libra": n, "aquarius": n, "cancer": g, "scorpio": g, "pisces": g
        };

        var scor = {
            "aries": f, "leo": f, "sagittarius": n, "taurus": g, "virgo": g, "capricorn": g, "gemini": n,
            "libra": n, "aquarius": n, "cancer": g, "scorpio": g, "pisces": g
        };

        var pisces = {
            "aries": f, "leo": f, "sagittarius": f, "taurus": g, "virgo": f, "capricorn": g, "gemini": n,
            "libra": n, "aquarius": n, "cancer": g, "scorpio": g, "pisces": g
        };

        var sign1 = args[0].toLowerCase();
        var sign2 = args[1].toLowerCase();

        var result;
        if (sign1 === "aries"){
            result = aries[sign2];
            
        } else if (sign1 === "leo"){
            result = leo[sign2];
            
        } else if (sign1 === "sagittarius"){
            result = sag[sign2];
            
        } else if (sign1 === "taurus"){
            result = taurus[sign2];
    
        } else if (sign1 === "virgo"){
            result = virgo[sign2];
            
        } else if (sign1 === "capricorn"){
            result = cap[sign2];
           
        } else if (sign1 === "gemini"){
            result = gem[sign2];
            
        } else if (sign1 === "libra"){
            result = lib[sign2];
            
        } else if (sign1 === "aquarius") {
            result = aquarius[sign2];
            
        } else if (sign1 === "cancer"){
            result = can[sign2];
            
        } else if (sign1 === "scorpio"){
            result = scor[sign2];
            
        } else if (sign1 === "pisces"){
            result = pisces[sign2];
            
        } else {
            return message.reply("Please enter a valid zodiac sign");
        }

        if (typeof result === 'undefined'){
            return message.reply("Please enter a valid zodiac sign");
        }
        message.channel.send(`Love compatibility of ${sign1} and ${sign2}: ${result}`);
    }
}