const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList) => {
  message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    bot.emit("noPerms", message);
    return;
  }
  bot.emit("guildMemberRemove", message.member);
}

module.exports.help = {
  name: "removeUser",
  desc: "Сообщение об отсоединении пользователя.",
  author: "InfiniteC0re"
}
