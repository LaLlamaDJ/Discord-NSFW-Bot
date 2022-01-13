module.exports = {
    name: 'ping',
    aliases: ["p"],
    async execute(message, args, MessageEmbed, Util, client){
        const embed = new MessageEmbed()
            .setTitle('Pong')
            .setDescription(client.ws.ping)
            .setColor("GREEN")
        message.channel.send({ embeds: [embed] });
    },
};
