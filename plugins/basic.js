const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  if (messageArray[1] == "help") {
    message.channel.send('```'+commandList+'```');
  }else if(messageArray[1] == "embed") {
    let content = messageArray.slice(2).join(" ");
    if(content!="") {
      let embed = new Discord.RichEmbed()
      .setTitle(content)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00AE86);
      message.channel.send({embed});
    }else{
      const embed = new Discord.RichEmbed()
      .setTitle("Сообщение не может быть пустым!")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(0x00AE86);
      message.channel.send({embed});
    }
    }else{
      let embed = new Discord.RichEmbed()
      .setTitle(`Плагин Basic не нашел этой функции!\nДоступные функции:\n\nembed - отправляет сообщение в блоке (.basic embed)\nhelp - отображает все доступные команды (.basic help)`)
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
