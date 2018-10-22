const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    bot.emit("noPerms", message);
    return;
  }
  let event = messageArray[1];
  if (event) {
    bot.emit(event, message);
    let embed = new Discord.RichEmbed()
    .setTitle(`Событие '${event}' успешно выполнено!`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86);
    message.channel.send({embed});
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle("Вы не указали событие!")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0xFF0000);
    message.channel.send({embed});
  }
}

module.exports.help = {
  name: "eventEmit",
  desc: "Выполнение события.",
  author: "InfiniteC0re"
}
