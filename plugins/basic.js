const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  if (messageArray[1] == "help") {
    commandList+=`.embed - Создаёт блочное сообщение`;
    message.channel.send('```'+commandList+'```');
  }else if(messageArray[1] == "embed") {
    let content = messageArray.slice(2);
    if(content!="") {
      const embed = new Discord.RichEmbed()
      .setTitle(content)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00AE86);
  }else{
    const embed = new Discord.RichEmbed()
    .setTitle("Сообщение не может быть пустым!")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86);
  }

    message.channel.send({embed});
  }else{
    const embed = new Discord.RichEmbed()
    .setTitle(`Плагин Basic не нашел этой команды!\nВызовите 'basic help' для получения списка команд`)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86);

    message.channel.send({embed});
  }
}

module.exports.help = {
  name: "basic",
  desc: "Базовый плагин InfBot 2.0",
  author: "InfiniteC0re"
}
