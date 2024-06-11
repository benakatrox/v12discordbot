const discord = require("discord.js");
const db = require("orio.db");

exports.run = async(client, message, args) => {

const kayitalınacakrol = await db.fetch(`alınacakrol_${message.guild.id}`)
const rol = await db.fetch(`verilecekrol_${message.guild.id}`)
const kanal = await db.fetch(`kayıtolkanal_${message.guild.id}`)
const rl = message.guild.roles.cache.get(rol)

if(!message.member.roles.cache.has(kayitalınacakrol)) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için <@&${kayitalınacakrol}> adlı role sahip olmalısın.`)).then(m => m.delete(({ timeout: 4000})));
if(!kayitalınacakrol) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu sunucuda **Kayıtsız** rolü belirtilmemiş, lütfen kayıt olabilmek için yönetici ile iletişime geçin.`)).then(m => m.delete(({ timeout: 4000})));
if(!rol) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu sunucuda **Kayıtlı** rolü belirtilmemiş, lütfen kayıt olabilmek için yönetici ile iletişime geçin.`)).then(m => m.delete(({ timeout: 4000})));
if(!kanal) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu sunucuda **Kullanıcı Kayıt** kanalı belirtilmemiş, lütfen kayıt olabilmek için yönetici ile iletişime geçin.`)).then(m => m.delete(({ timeout: 4000})));
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu sadece <#${kanal}> adlı kanalda kullanabilirsin.`)).then(m => m.delete(({ timeout: 4000})));


else {
  const isim = args[0]
  if(!isim) return message.reply(new discord.MessageEmbed().setColor('RED') .setDescription(`Lütfen isimini söylermisin.`)).then(m => m.delete(({ timeout: 4000})));
  
    const yas = args[1]
  if(!yas) return message.reply(new discord.MessageEmbed().setColor('RED') .setDescription(`Lütfen yaşını söylermisin.`)).then(m => m.delete(({ timeout: 4000})));
  
  else {
    
    const başarılı = new discord.MessageEmbed()
.setTitle(`:flag_tr:  Kayıt Sistemi :flag_tr: `)
.setColor("ORANGE")
.setDescription(`${message.author.username} adlı kullanıcı başarıyla kayıt olmuştur.\n`)
.addField(`Kullanıcının Adı:`, `${isim}`, true)
.addField(`Kullanıcının Yaşı:`, `${yas}`, true)
.setThumbnail(client.user.avatarURL())
.setFooter('Ravel Bot 💜  2020 © 2022')
message.channel.send(başarılı)

    message.member.roles.add(rl)
    message.member.roles.remove(kayitalınacakrol)
    message.member.setNickname(`${isim} - ${yas}`)
  }
}
};
exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0 

};

exports.help = {
  name: "kayıtol", 
  description: "",
  usage: ""
};