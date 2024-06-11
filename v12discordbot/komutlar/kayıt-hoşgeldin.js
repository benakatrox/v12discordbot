const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Yönetici** adlı yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt sistemi hoşgeldin kanalı başarıyla sıfırlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(sıfırlandı).then(m => m.delete(({ timeout: 4000})));
db.delete(`kayıthg_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt sistemi için bir hoşgeldin kanalı belirleyiniz.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlanmadı).then(m => m.delete(({ timeout: 4000})));
}
db.set(`kayıthg_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt sistemi hoşgeldin kanalı başarıyla ${kanal} olarak ayarlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlandı).then(m => m.delete(({ timeout: 4000})));
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-hg"],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-hoşgeldin',
  description: 'Kayıt Olunacak Kanalı Ayarlar',
  usage: 'dr!kayıt-kanal #kanal'
}