exports.run = (client, message) => {
        let db = require("orio.db")
        let Discord = require("discord.js")
  
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("RED")
.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** adlı yetkin olması gerekmektedir.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(küfür) {
      db.delete(`küfür.${message.guild.id}`)
      message.channel.send(`Küfür engel sistemi başarıyla kapatıldı.`).then(l => {
      l.delete({timeout: 4000})
    })
    }else{
      db.set(`küfür.${message.guild.id}.durum`,true)
      message.channel.send(`Küfür engel sistemi başarıyla açıldı.`).then(l => {
      l.delete({timeout: 4000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-engel"],
  permLevel: 0
};

exports.help = {
  name: 'küfürengel',
  description: '',
  usage: ''
}