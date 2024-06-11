const discord = require('discord.js')
const db = require('orio.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let verilecekrol = db.fetch(`verilecekrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)

 
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için <@&${kayıtçı}> yetkisine sahip olmalısın.`)).then(m => m.delete(({ timeout: 4000})));
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komut sadece <#${kanal}> kanalında kullanılabilir.`)).then(m => m.delete(({ timeout: 4000})));


let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setColor('ORANGE') .setDescription(`Kaydı silinecek kullanıcıyı belirtiniz.`)).then(m => m.delete(({ timeout: 4000})));
member.setNickname(`Lütfen Kayıt Yaptırınız`)
member.roles.remove(kızrol)
member.roles.remove(verilecekrol)
member.roles.remove(erkekrol)
member.roles.add(alınacakrol)

const başarılı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("BLACK")
.setDescription(`:no_entry:  Bir kullanıcı kaydı silindi.`)
.addField(`» Kaydı Silinen Kullanıcı :`, `${member}`, true)
.addField(`» Kaydı Silen Yetkili :`, `<@!${message.author.id}>`, true)
.setThumbnail(member.avatarURL)
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(başarılı)
db.remove(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıt-sil'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt-sil',
  description: 'erkek olarak kayıt eder',
  usage: 'dr!erkek @kullanıcı isim yaş'
}