const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Mesajları Yönet** yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
  
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
  
    return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Oylama için bir konu belirlemelisiniz.`)).then(m => m.delete(({ timeout: 4000})));
  message.channel
    .send(
      new Discord.MessageEmbed()
		.setTitle(":flag_tr:  **Yeni Bir Oylama Başladı** :flag_tr: ")
        .setColor("ORANGE")
        .setFooter('Ravel Bot 💜  2020 © 2022')
        .setDescription(`\n**» Oylama Konusu : ** \n${question}`)
    )
	message.channel.send("|| @everyone @here ||")
    .then(function(message) {
      message.react("✅");
      message.react("❌");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};
