const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return essage.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için <@&${kayıtçı}> yetkisine sahip olmalısın.`)).then(m => m.delete(({ timeout: 4000})));
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komut sadece <#${kanal}> kanalında kullanılabilir.`)).then(m => m.delete(({ timeout: 4000})));
if (!kızrol) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu sunucuda kız rolü ayarlanmadığından bu komutu kullanamazsın.`)).then(m => m.delete(({ timeout: 4000})));
let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setColor('ORANGE') .setDescription(`Kayıt edeceğin kullanıcıyı belirtmelisin.`)).then(m => m.delete(({ timeout: 4000})));
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setColor('ORANGE') .setDescription(`Kayıt edeceğin kullanıcının ismini belirtlemisin.`)).then(m => m.delete(({ timeout: 4000})));
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setColor('ORANGE') .setDescription(`Kayıt edeceğin kullanıcının yaşını belirtmelisin.`)).then(m => m.delete(({ timeout: 4000})));
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 

const başarılı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`:no_entry:  Yeni bir kullanıcı kayıt edildi.\n\nKullanıcı : ${member} \n Yetkili : <@!${message.author.id}>\n\n`)
.addField(`» Kullanıcının Adı :`, `${isim}`, true)
.addField(`» Kullanıcının Yaşı :`, `${yaş}`, true)
.addField(`» Kullanıcının Cinsiyeti :`, `Kız`, true)
.setThumbnail(member.avatarURL)
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'kız olarak kayıt eder',
  usage: '!kız @kullanıcı isim yaş'
}