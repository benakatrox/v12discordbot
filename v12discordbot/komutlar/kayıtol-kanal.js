const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Gweep Creative Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kullanıcı Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kayıtol sistemi kayıt kanalı başarıyla sıfırlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(sıfırlandı).then(m => m.delete(({ timeout: 4000})));
db.delete(`kayıtolkanal_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kullanıcı Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kullanıcı kayıt sistemi için kullanıcıların kendini kayıt edeceği bir kanal belirtiniz.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlanmadı).then(m => m.delete(({ timeout: 4000})));
}
db.set(`kayıtolkanal_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kullanıcı Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`Kullanıcı kayıt sistemi kanalı ${kanal} olarak ayarlandı.`)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(ayarlandı).then(m => m.delete(({ timeout: 4000})));
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: [""],
  permlevel: 0
}
exports.help = {
  name: 'kayıtol-kanal',
  description: 'Kayıtol Sistemine Olunacak Kanalı Ayarlar',
  usage: ''
}