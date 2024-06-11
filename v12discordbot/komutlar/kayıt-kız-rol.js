const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Yönetici** adlı yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt sistemi kız rolü başarıyla sıfırlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(sıfırlandı).then(m => m.delete(({ timeout: 4000})));
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Lütfen bir kız rolü belirtiniz.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlanmadı).then(m => m.delete(({ timeout: 4000})));
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıt kız rolü ${rol} olarak başarıyla ayarlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlandı).then(m => m.delete(({ timeout: 4000})));
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}