const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Yönetici** adlı yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt sistemi erkek rolü başarıyla sıfırlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(sıfırlandı).then(m => m.delete(({ timeout: 4000})));
db.delete(`erkekrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Lütfen bir erkek rolü belirtiniz.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlanmadı).then(m => m.delete(({ timeout: 4000})));
}
db.set(`erkekrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt erkek rolü ${rol} olarak başarıyla ayarlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlandı).then(m => m.delete(({ timeout: 4000})));
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['erkekrol', 'erol', 'e-rol'],
  permlevel: 0
}
exports.help = {
  name: 'erkek-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
}