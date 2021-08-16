module.exports = {
    name: "sign",
    aliases: [],
    cooldown: 5,
    permissions: [],
    description: "Gives a description of the zodiac sign",
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
        
        if (!(args.length == 1)) return message.reply("Please enter either a birthday (month/day) or zodiac sign");
        let birthday = args[0].split("/");
        var sign = "";
        if (birthday.length == 1) {
            //argument is a sign not a birthday
            sign = args[0].toLowerCase();
        } else {
            //find the sign associated with the birthday
            if (!(birthday.length == 2)) return message.reply("Please enter a birthday in month/day format");
            if (!(1 <= birthday[0] <= 12)) return message.reply("Please enter a valid month number");
            if (!(1 <= birthday[1] <= 31)) return message.reply("Please enter a valid date number");

            let month = birthday[0];
            let day = birthday[1];

            if (month == 1) {
                if (20 <= day <= 31) {
                    sign = "aquarius";
                } else {
                    sign = "capricorn";
                }
            } else if (month == 2) {
                if (1 <= day <= 18) {
                    sign = "aquarius";
                } else {
                    sign = "pisces";
                }
            } else if (month == 3) {
                if (1 <= day <= 20) {
                    sign = "pisces";
                } else {
                    sign = "aries";
                }
            } else if (month == 4) {
                if (1 <= day <= 19) {
                    sign = "aries";
                } else {
                    sign = "taurus";
                }
            } else if (month == 5) {
                if (1 <= day <= 20) {
                    sign = "taurus";
                } else {
                    sign = "gemini";
                }
            } else if (month == 6) {
                if (1 <= day <= 20) {
                    sign = "gemini";
                } else {
                    sign = "cancer";
                }
            } else if (month == 7) {
                if (1 <= day <= 22) {
                    sign = "cancer";
                } else {
                    sign = "leo";
                }
            } else if (month == 8) {
                if (1 <= day <= 22) {
                    sign = "leo";
                } else {
                    sign = "virgo";
                }
            } else if (month == 9) {
                if (1 <= day <= 22) {
                    sign = "virgo";
                } else {
                    sign = "libra";
                }
            } else if (month == 10) {
                if (1 <= day <= 22) {
                    sign = "libra";
                } else {
                    sign = "scorpio";
                }
            } else if (month == 11) {
                if (1 <= day <= 21) {
                    sign = "scorpio";
                } else {
                    sign = "sagittarius";
                }
            } else {
                if (1 <= day <= 21) {
                    sign = "sagittarius";
                } else {
                    sign = "capricorn";
                }
            }
        }

        var title, description, imageURL, colour;
        if (sign === "aquarius") {
            colour = "#0000FF";
            title = "Aquarius";
            description = `**1/20 - 2/18**` + "\n\nThose born under the Aquarius sign are shy and quiet, but can be eccentric and energetic.\n\nThey are deep thinkers and love helping others. They are also objective people, which allows them to easily solve problems." +
            `\n\n**Element**: Air \n\n**Color**: light blue, silver \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263892-800x515r1-horoscopes-pillars_Aquarius.webp";

        } else if (sign === "pisces") {
            colour = "#93E9BE";
            title = "Pisces";
            description = `**2/19 - 3/20**` + "\n\nThose born under the Pisces sign are very friendly and can find themselves accompanied by many different people.\n\nThey are selfless and willing to help others. They are also empathetic and have great emotional capacity." +
            `\n\n**Element**: Water \n\n**Color**: mauve, lilac, purple, violet, sea green \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/pisces/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263984-800x515r1-horoscopes-pillars_Pisces.webp";

        } else if (sign === "aries") {
            colour = "#FF0000";
            title = "Aries";
            description = `**3/21 - 4/19**`+ "\n\nThose born under the Aries sign are energetic and turbulent. \n\nThey are very competitive and sometimes take initiative before thinking it through." +
            `\n\n**Element**: Fire \n\n**Color**: red \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/aries/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263910-800x515r1-horoscopes-pillars_Aries.webp";

        } else if (sign === "taurus") {
            colour = "#00FF00";
            title = "Taurus";
            description = `**4/20 - 5/20**`+ "\n\nThose born under the Taurus sign are practical and well-grounded.\n\nThey are sensual, tactile, stable and conservative. In addition, they endure and stick true to their choices until they are satisfied." +
            `\n\n**Element**: Earth \n\n**Color**: green, pink \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/taurus/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263901-800x515r1-horoscopes-pillars_Taurus.webp";

        } else if (sign === "gemini") {
            colour = "#FFFF00";
            title = "Gemini";
            description = `**5/21 - 6/20**` + "\n\nThose born under the Gemini sign are expressive and quick-witted. They are sociable, communicative, and can suddenly become serious, thoughtful and restless. \n\nThey are also extremely curious and fascinated with the world." +
            `\n\n**Element**: Air \n\n**Color**: light green, yellow \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/gemini/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263913-800x515r1-horoscopes-pillars_Gemini.webp";

        } else if (sign === "cancer") {
            colour = "#C0C0C0";
            title = "Cancer";
            description = `**6/21 - 7/22**` + "\n\nThose born under the Cancer sign are deeply intuitive and sentimental. \n\nThey are very emotional and sensitive people. In addition, they are sympathetic and tend to get attached to people they keep close." +
            `\n\n**Element**: Water \n\n**Color**: white \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/cancer/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263917-800x515r1-horoscopes-pillars_Cancer.webp";

        } else if (sign === "leo") {
            colour = "#FFA500";
            title = "Leo";
            description = `**7/23 - 8/22**` + "\n\nThose born under the Leo sign are natural born leaders. \n\nThey have great self confidence and are able to achieve anything they want in life that they commit to. They often have many friends that are generous and loyal." +
            `\n\n**Element**: Fire \n\n**Color**: gold, yellow, orange \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/leo/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263919-800x515r1-horoscopes-pillars_Leo.webp";

        } else if (sign === "virgo") {
            colour = "#7f7053";
            title = "Virgo";
            description = `**8/23 - 9/22**` + "\n\nThose born under the Virgo sign are very attentive. \n\nThey are often misunderstood as they won't accept their feelings as valid when opposed to reason. They have a deep sense of humanity and have a methodical approach to life." +
            `\n\n**Element**: Earth \n\n**Color**: grey, beige, pale yellow \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263990-800x515r1-horoscopes-pillars_Virgo.webp";

        } else if (sign === "libra") {
            colour = "#add8e6";
            title = "Libra";
            description = `**9/23 - 10/22**` + "\n\nThose born under the Libra sign are peaceful and hate being alone. \n\nThey strive for justice and equality. In addition, they tend to try to avoid conflict and keep the peace." +
            `\n\n**Element**: Air \n\n**Color**: pink, green \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/libra/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263907-800x515r1-horoscopes-pillars_Libra.webp";

        } else if (sign === "scorpio") {
            colour = "#800020";
            title = "Scorpio";
            description = `**10/23 - 11/21**` + "\n\nThose born under the Scorpio sign are passionate and assertive. \n\nThey make great leaders as they are determined, decisive and resourceful." +
            `\n\n**Element**: Water \n\n**Color**: scarlet, red, rust \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/scorpio/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263942-800x515r1-horoscopes-pillars_Scorpio.webp";

        } else if (sign === "sagittarius") {
            colour = "#800080";
            title = "Sagittarius";
            description = `**11/22 - 12/21**` + "\n\nThose born under the Sagittarius sign are curious and energetic. \n\nThey are open minded and philosophical. In addition, they are extroverted, optimistic and enthusiastic." +
            `\n\n**Element**: Fire \n\n**Color**: blue \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263890-800x515r1-horoscopes-pillars_Sagittarius.webp";

        } else if (sign === "capricorn") {
            colour = "#BE5504";
            title = "Capricorn";
            description = `**12/22 - 1/19**` + "\n\nThose born under the Capricorn sign are serious and responsible. \n\nThey have good self-control and independence. They make solid and realistic plans and will succeed based on their expertise and experience." +
            `\n\n**Element**: Earth \n\n**Color**: brown, black \n\nFor more info, visit: https://www.astrology-zodiac-signs.com/zodiac-signs/capricorn/`;
            imageURL = "https://cf.ltkcdn.net/horoscopes/images/std/263886-800x515r1-horoscopes-pillars_Capricorn.webp";

        } else {
            return message.channel.send("Please enter a valid zodiac sign");
        }

        const result = new Discord.MessageEmbed()
            .setColor(colour)
            .setTitle(title)
            .setDescription(description)
            .setImage(imageURL);

        message.channel.send(result);
    }
}