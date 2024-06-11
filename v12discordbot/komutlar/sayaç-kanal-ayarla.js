const Discord = require("discord.js");
const fs = require("fs");
var ayarlar = require('../ayarlar.json');
 
module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('YELLOW') .setDescription(`Bu komutu kullanabilmek için **YONETICI** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
 
  const db = require("orio.db");
 
  let channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name === args.slice(0).join(" "));
  let prefix = ayarlar.prefix;
 
  if (!channel) {
    return message.channel.send(new Discord.MessageEmbed().setColor('YELLOW') .setDescription(`Lütfen ayarlamak istediğiniz **Kanalı** etiketleyin.`)).then(m => m.delete(({ timeout: 4000})));
  }

  db.set(`sayaçKanal_${message.guild.id}`, channel.id);

  const embed = new Discord.MessageEmbed()
      .setTitle(":flag_tr:  Sayaç Sistemi Bilgilendirme :flag_tr: ")
      .setThumbnail(message.guild.iconURL())
      .setColor("ORANGE")
      .setDescription(`Sayaç Başarıyla Ayarlandı! \nAyarlanan Kanal **${channel.name}**`)
      .setTimestamp()
      .setFooter('Ravel Bot 💜  2020 © 2022')
  message.channel.send(embed).then(m => m.delete(({ timeout: 4000})));
};

module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sayaç-kanal-ayarla"
};