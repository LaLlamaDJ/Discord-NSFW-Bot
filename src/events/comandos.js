const prefix = "!"
module.exports = {
    name: 'messageCreate',
    execute(message, client, MessageEmbed, Util){
        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
   
        const command = client.commands.get(commandName.toLowerCase()) ||  client.commands.find((command) => command.aliases && command.aliases.includes(commandName));
        if(!command) return message.reply(`${commandName} no es un comando valido!`);
        try{
            command.execute(message, args, MessageEmbed, Util, client)
        }catch(error){
            console.log(error)
            message.channel.send("OcurriÃ³ un error al ejecutar ese comando")
        }
    },
};
