const Discord = require('discord.js');
const db = require('orio.db')
module.exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için **YONETICI** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 6) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Otorol için minimum karekter sayısı **6**, Ayrıca ayarlamalar için; -uye- ve -uyesayisi- kullanabilirsin. Örn: **-uye- aramıza hoşgeldin! Seninle birlikte toplam -uyesayisi- kişiyiz!**`)).then(m => m.delete(({ timeout: 4000})));
  
 const embed = new Discord.MessageEmbed()
      .setTitle(":flag_tr:  Otorol Sistemi Bilgilendirme :flag_tr: ")
      .setThumbnail(message.guild.iconURL())
      .setColor("ORANGE")
      .setDescription(`Otorol Mesajı Başarıyla Ayarlandı! \nAyarlanan Mesaj : **`+mesaj+`**\n`)
      .setTimestamp()
      .setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(embed).then(m => m.delete(({ timeout: 4000})));
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "otorol-mesaj"
  };