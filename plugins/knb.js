const Discord = require("discord.js");

module.exports.run = async (bot, message, args, pluginList, commandList, messageArray) => {
  message.delete();
  let userInput = messageArray[1];
  if(userInput!=undefined) {
    userInput = userInput.toLowerCase();
    if (userInput == "бумага" || userInput == "ножницы" || userInput == "камень") {
      var randomnum = Math.floor(Math.random() * 3);
			if (randomnum == 1) {
        var botOutput = "Камень";
			}else if(randomnum == 2) {
        var botOutput = "Ножницы";
			}else if(randomnum == 0) {
        var botOutput = "Бумага";
			}
      if (botOutput == "Камень") {
				if (userInput == "бумага") {
					var final = 1;
				}
				if (userInput == "камень") {
					var final = 2;
				}
				if (userInput == "ножницы") {
					var final = 0;
				}
			}
			if (botOutput == "Бумага") {
				if (userInput == "бумага") {
					var final = 2;
				}
				if (userInput == "камень") {
					var final = 0;
				}
				if (userInput == "ножницы") {
					var final = 1;
				}
			}
				if (botOutput == "Ножницы") {
					if (userInput == "бумага") {
						var final = 0;
					}
					if (userInput == "камень") {
						var final = 1;
					}
					if (userInput == "ножницы") {
						var final = 2;
					}
				}
				if (final == 0) {
					final = "Победа бота!";
				}
				if (final == 1) {
					final = "Вы победили!";
				}
				if (final == 2) {
					final = "Ничья!";
			}
      userInput = userInput.charAt(0).toUpperCase() + userInput.substr(1);
      var finalEmbed =
				{embed: {
				"title": "КНБ",
				"color": 2673321,
				"author": {
				  "name": message.author.username,
				  "icon_url": message.author.avatarURL
				},
				"fields": [
				  {
					"name": "Ставка бота:",
					"value": botOutput,
					"inline": true
				  },
				  {
					"name": "Ваша ставка:",
					"value": userInput,
					"inline": true
				  },
				  {
					"name": "Итог игры:",
					"value": final
				  }
				]
			  }
			};
      message.channel.send(finalEmbed);
    }
  }
  if (userInput != "Бумага" && userInput != "Ножницы" && userInput != "Камень") {
    let embed = new Discord.RichEmbed()
    .setTitle("Сделайте выбор из камня, ножниц или бумаги.")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86);
    message.channel.send({embed});
  }
}

module.exports.help = {
  name: "knb",
  desc: "Камень Ножницы Бумага.",
  author: "InfiniteC0re"
}
