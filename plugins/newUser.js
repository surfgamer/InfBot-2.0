const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList) => {
  message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    bot.emit("noPerms", message);
    return;
  }
  bot.emit("guildMemberAdd", message.member);
}

module.exports.help = {
  name: "newUser",
  desc: "Сообщение о новом пользователе.",
  author: "InfiniteC0re"
}
