const Discord = require("discord.js");

exports.run = (client, message) => {
  let sunucu = new Discord.MessageEmbed()
    .setTitle(":flag_tr:  Sunucu Bilgisi Paneli :flag_tr: ")
    .setThumbnail(message.guild.iconURL())
  .setColor("ORANGE")
    .addField("Sunucu İsmi", message.guild.name)
    .addField("Sunucu İdsi", message.guild.id)
    .addField("Sunucu Bölgesi", message.guild.region)
    .addField(
      "Roller:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField("AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField("AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField("Oluşturma tarihi:", message.guild.createdAt, true)
    .setImage(`https://i.hizliresim.com/bv3gvn9.gif`)
	.setFooter('Ravel Bot 💜  2020 © 2022')
  return message.channel.send(sunucu);
};

module.exports.conf = {
  aliases: ["sunucu"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};
