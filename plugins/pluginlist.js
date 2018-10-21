const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList) => {
  message.delete();
  message.channel.send('```'+pluginList+'```');
  return;
}

module.exports.help = {
  name: "pluginList",
  desc: "Отображение количества плагинов.",
  author: "InfiniteC0re"
}
