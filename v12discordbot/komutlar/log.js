const Discord = require('discord.js')
const data = require('orio.db')
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yukleniyor:828566873665962025> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await data.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Her hangi bir moderasyon log kanalı zaten ayarlı değil! Ayarlamak için : ${prefix}moderasyon-log <#kanal>`);
    data.delete(`log_${message.guild.id}`)
   message.channel.send(`Moderasyon Log başarıyla sıfırlandı!`);
  
    return
  }
  
if (!logk) return message.channel.send(`Bir log kanalı belirtmelisin.`);

data.set(`log_${message.guild.id}`, logk.id)

message.channel.send(`Başarılı! Moderasyon Log kanalı başarıyla ayarlandı!\n Ayarlanan Kanal : <#${logkanal}>`);

};

module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "log"
  };
   