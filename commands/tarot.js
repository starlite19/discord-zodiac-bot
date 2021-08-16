module.exports = {
    name: "tarot",
    aliases: [],
    cooldown: 5,
    permissions: [],
    description: "Displays tarot cards according to the number specified",
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

        if (!args.length) return message.reply("Please indicate the number of cards you want.");

        var num = parseInt(args[0]);
        //only allow maximum of 3 cards at a time
        if (num > 3 || num < 1) return message.reply("Please pick a maximum of 3 cards and minimum of 1 card.");

        //image url of 22 cards
        const worldURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_medium.png?v=1489193487";
        const judgementURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-judgement_medium.png?v=1489191982";
        const sunURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-sun_medium.png?v=1489190376";
        const moonURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-moon_medium.png?v=1489188353";
        const starURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-star_medium.png?v=1489187135";
        const towerURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-tower_medium.png?v=1489185889";
        const devilURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-devil_medium.png?v=1489167792";
        const temperanceURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-temperance_medium.png?v=1489166942";
        const deathURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-death_medium.png?v=1488924469";
        const hangURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-hanged-man_medium.png?v=1488921716";
        const justiceURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-justice_medium.png?v=1488920859";
        const fortuneURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-wheel-of-fortune_medium.png?v=1488919069";
        const hermitURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-hermit_medium.png?v=1488908379";
        const strengthURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-strength_medium.png?v=1488907669";
        const chariotURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-chariot_medium.png?v=1488905976";
        const loversURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-lovers_medium.png?v=1488900062";
        const hierophantURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-hierophant_medium.png?v=1488864368";
        const emperorURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-emperor_medium.png?v=1488863121";
        const empressURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-empress_medium.png?v=1488861619";
        const priestessURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-high-priestess_medium.png?v=1488835017";
        const magicianURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-magician_medium.png?v=1488831715";
        const foolURL = "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-fool_medium.png?v=1488830339";
        
        const color = "#3e236e";

        //create embeds of all 22 cards
        const world = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The World")
        .setImage(worldURL);
        
        const judgement = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Judgement")
        .setImage(judgementURL);

        const sun = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Sun")
        .setImage(sunURL);

        const moon = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Moon")
        .setImage(moonURL);

        const star = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Star")
        .setImage(starURL);

        const tower = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Tower")
        .setImage(towerURL);

        const devil = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Devil")
        .setImage(devilURL);

        const temp = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Temperance")
        .setImage(temperanceURL);

        const death = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Death")
        .setImage(deathURL);

        const hang = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Hanged Man")
        .setImage(hangURL);

        const justice = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Justice")
        .setImage(justiceURL);

        const fortune = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Wheel of Fortune")
        .setImage(fortuneURL);

        const hermit = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Hermit")
        .setImage(hermitURL);

        const strength = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("Strength")
        .setImage(strengthURL);

        const chariot = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Chariot")
        .setImage(chariotURL);

        const lovers = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Lovers")
        .setImage(loversURL);

        const hierophant = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Hierophant")
        .setImage(hierophantURL);

        const emperor = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Emperor")
        .setImage(emperorURL);

        const empress = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Empress")
        .setImage(empressURL);

        const priestess = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The High Priestess")
        .setImage(priestessURL);

        const magician = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Magician")
        .setImage(magicianURL);

        const fool = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle("The Fool")
        .setImage(foolURL);

        //put all embeds into an array
        const cards = [world, judgement, sun, moon, star, tower, devil, temp, death, hang, justice, fortune, hermit, strength, chariot, lovers, hierophant, emperor, empress, priestess, magician, fool];

        function getCards(cards, num){
            var result = new Array(num),
            len = cards.length,
            taken = new Array(len);

            while(num--){
                var i = Math.floor(Math.random() * len);
                result[num] = cards[i in taken ? taken[i] : i];
                taken[i] = --len in taken ? taken[len] : len;
            }
            return result;
        }
        //get random generated cards
        var newSet = getCards(cards, num);

        //send to channel
        var j;
        for(j = 0; j < num; j++){
            message.channel.send(newSet[j]);
        }
    }




}