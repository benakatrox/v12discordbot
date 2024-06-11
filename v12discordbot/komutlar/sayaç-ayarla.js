const Discord = require("discord.js");
const fs = require("fs");
const ayarlar = require('../ayarlar.json');
 
module.exports.run = async (client, message, args) => {
  const db = require("orio.db");
 
  let prefix = ayarlar.prefix;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('YELLOW') .setDescription(`Bu komutu kullanabilmek için **YONETICI** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
 
  if (!args[0]) {
    return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Lütfen ayarlamak istediğiniz sayıyı giriniz. **Örn: ${prefix}sayaç <sayı>**`)).then(m => m.delete(({ timeout: 4000})));
  }
 
  if (args[0] === "kapat") {
    if (db.has(`sayacsayı_${message.guild.id}`) === true) {
      db.delete(`sayacsayı_${message.guild.id}`);
 
      if (db.has(`sayaçKanal_${message.guild.id}`) === true) {
        db.delete(`sayaçKanal_${message.guild.id}`);
        message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Sayaç başarılı bir şekilde devredışı bırakıldı!`)).then(m => m.delete(({ timeout: 4000})));
        return;
      }
 
      message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Sayaç kaldırıldı!`)).then(m => m.delete(({ timeout: 4000})));
      return;
    }
    message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Sayaç zaten ayarlanmamış. Ayarlamak için **${prefix}sayaç <sayı>**`)).then(m => m.delete(({ timeout: 4000})));
    return;
  }
 
  if (isNaN(args[0])) {
    message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Belirlediğin sadece sayı olabilir!`)).then(m => m.delete(({ timeout: 4000})));
  }
 
  if (args[0] <= message.guild.memberCount) {
    const embed = new Discord.MessageEmbed();
    return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM') .setDescription(`Belirlediğin sayı sunucudaki üye sayısından fazla olmalıdır!`)).then(m => m.delete(({ timeout: 4000})));
  }
 
  db.set(`sayacsayı_${message.guild.id}`, args[0]);
 
  const embed = new Discord.MessageEmbed()
      .setTitle(":flag_tr:  Sayaç Sistemi Bilgilendirme :flag_tr: ")
      .setThumbnail(message.guild.iconURL())
      .setColor("ORANGE")
      .setDescription(`Sayaç Başarıyla Ayarlandı! \nAyarlanan Sayı **${args[0]}**\nSayacı Devredışı Bırakmak İçin **${prefix}sayaç kapat**\nSayaç Kanalı Ayarlamayı Unutmayın! **${prefix}sayaç-kanal-ayarla <#kanal>**`)
      .setTimestamp()
      .setFooter('Ravel Bot 💜  2020 © 2022')
  message.channel.send(embed).then(m => m.delete(({ timeout: 4000})));
};
 
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sayaç"
};