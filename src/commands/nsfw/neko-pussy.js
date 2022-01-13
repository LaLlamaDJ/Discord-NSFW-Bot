const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'n-pussy',
    category: 'nsfw',
    async execute(message, args, MessageEmbed, Util, client){
        var errMessage = "El comando que intentas ver sólo puede mostrarse en un canal NSFW.";

        if (!message.channel.nsfw) {
           message.react('💢');
           return message.reply(errMessage)
        }
        
        const image = await nsfw.nekopussy();

        const embed = new Discord.MessageEmbed()
        .setTitle(`Neko Pussy`)
        .setImage(image)
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Request By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send({ embeds: [embed] });
    },
};
