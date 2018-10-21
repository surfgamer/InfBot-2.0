const version = '2.0';
const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
var pluginList = ``;
var commandList = `Список команд:\n\n`;
var currentPlugin = 0;
bot.commands = new Discord.Collection();

fs.readdir("./plugins", (err, file) => {

  if (err) console.log(err);

  let jsfile = file.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Не было найдено ни одного плагина.");
    return;
  }
  pluginList+=`Загружено ${jsfile.length} плагинов.\n\n`;
  jsfile.forEach((f, i) =>{
    let props = require(`./plugins/${f}`);
    currentPlugin+=1;
    pluginList+=`${currentPlugin}. ${f} (${config.prefix}${props.help.name}) - ${props.help.desc} | Автор - ${props.help.author}\n\n`;
    commandList+=`${config.prefix}${props.help.name} - ${props.help.desc}\n`;
    bot.commands.set(props.help.name, props);
  });
});

bot.on("message", message=>{
  if (message.author == bot.user) return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args, pluginList, commandList, messageArray);
});

bot.on("ready", () => {
  bot.user.setActivity(`Запущено ${bot.guilds.size} серверов.`);
  console.log("Bot is ready!");
});

bot.on("guildMemberAdd", member => {
  bot.channels.get("498406144989986828").send(`Добро пожаловать на сервер, <@${member.user.id}>!`);
});

bot.on("guildMemberRemove", member => {
  bot.channels.get("498406144989986828").send(`${member.user.tag} вышел с сервера.`);
});

bot.on("noPerms", message => {
  message.channel.send(`Мало прав для использования команды, <@${message.author.id}>!`);
});


bot.login(config.token);
