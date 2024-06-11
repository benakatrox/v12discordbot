const Discord = require('discord.js');
const db = require('orio.db')
module.exports.run = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için **YONETICI** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Otorol Zaten Kapalı!`)).then(m => m.delete(({ timeout: 4000})));
 
 
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Otorol Başarıyla Kapatıldı.`)).then(m => m.delete(({ timeout: 4000})));

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "otorol-kapat"
  };