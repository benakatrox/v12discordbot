 exports.run = (client, message) => {
        let db = require("orio.db")
        let Discord = require("discord.js")
  
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("RED")
.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** adlı yetkin olması gerekmektedir.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${message.guild.id}`)
      message.channel.send(`Reklam engel sistemi başarıyla kapatıldı.`).then(l => {
      l.delete({timeout: 4000})
    })
    }else{
      db.set(`reklam.${message.guild.id}.durum`,true)
      message.channel.send(`Reklam engel sistemi başarıyla açıldı.`).then(l => {
      l.delete({timeout: 4000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklamengel"],
  permLevel: 0
};

exports.help = {
  name: 'reklam-engel',
  description: "",
  usage: ''
}