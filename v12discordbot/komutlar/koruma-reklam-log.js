 exports.run = (client, message) => {
        let db = require("orio.db")
        let Discord = require("discord.js")
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("RED")
.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** adlı yetkin olması gerekmektedir.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("ORANGE")
.setDescription(`Lütfen bir reklam log kanalı belirleyiniz.`)
      if(reklam) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`reklam.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(new Discord.MessageEmbed().setColor('ORANGE') .setDescription(`Reklam log kanalı başarıyla ayarlandı.`)).then(m => m.delete(({ timeout: 4000})));
    }else{
     message.channel.send(new Discord.MessageEmbed().setColor('ORANGE') .setDescription(`Reklam engel sistemi açık değil!`)).then(m => m.delete(({ timeout: 4000})));
    }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklamlog"],
  permLevel: 0
};

exports.help = {
  name: 'reklam-log',
  description: "",
  usage: ''
}