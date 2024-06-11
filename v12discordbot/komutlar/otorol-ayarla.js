const Discord = require('discord.js');
const db = require('orio.db')

const ayarlar = require('../ayarlar.json');

module.exports.run = async (client, message, args) => {
	
var prefix = ayarlar.prefix;

let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için **YONETICI** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
 
 if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`lütfen Bir **Rol** Belirtiniz.`)).then(m => m.delete(({ timeout: 4000})));
 
 if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Lütfen Bir **Kanal** Belirtiniz. Örn: **${prefix}otorol-ayarla <@rol> <#kanal>**`)).then(m => m.delete(({ timeout: 4000})));
 

const embed = new Discord.MessageEmbed()
      .setTitle(":flag_tr:  Otorol Sistemi Bilgilendirme :flag_tr: ")
      .setThumbnail(message.guild.iconURL())
      .setColor("ORANGE")
      .setDescription(`Otorol Başarıyla Ayarlandı\nOtorol : **${rol}**\nKanal : **${kanal}**`)
      .setTimestamp()
      .setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(embed).then(m => m.delete(({ timeout: 4000})));

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "otorol-ayarla"
  };