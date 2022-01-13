module.exports.comandos = function (fs, client, Collection) {
    client.commands = new Collection();
    client.aliases = new Collection();
    const commandFolder = fs.readdirSync(__dirname + "/" + `../../commands`);
    for (const folder of commandFolder) {
      const commandFile = fs.readdirSync(__dirname + "/" + `../../commands/${folder}`);
      for (const file of commandFile) {
        const command = require(__dirname + "/" + `../../commands/${folder}/${file}`);
        client.commands.set(command.name, command);
        if (command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, command.name));
      }
    }
  };
