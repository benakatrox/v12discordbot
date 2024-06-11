const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Yönetici** adlı yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt olunca alınacak rol başarıyla sıfırlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(sıfırlandı).then(m => m.delete(({ timeout: 4000})));
db.delete(`alınacakrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt olunca alınacak bir rol belirtiniz.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlanmadı).then(m => m.delete(({ timeout: 4000})));
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Başarılı işlem!\nKayıt olunca alınacak rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlandı).then(m => m.delete(({ timeout: 4000})));
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['alınacakrol', 'arol', 'a-rol'],
  permlevel: 0
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: 'alınacak-rol @rol'
}