  exports.run = (client, message) => {
        let db = require("orio.db")
        let Discord = require("discord.js")
    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
  const member3 = new Discord.MessageEmbed()
     .setColor("RED")
.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** adlı yetkin olması gerekmektedir.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    const member = new Discord.MessageEmbed()
     .setColor("ORANGE")
.setDescription(`Lütfen bir reklam log kanalı belirleyiniz.`)
      if(küfür) {
        let kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send(member)
      db.set(`küfür.${message.guild.id}.kanal`,kanal.id)
      message.channel.send(new Discord.MessageEmbed().setColor('ORANGE') .setDescription(`Küfür engel log kanalı başarıyla ayarlandı.`)).then(m => m.delete(({ timeout: 4000})));
    }else{
     message.channel.send(new Discord.MessageEmbed().setColor('ORANGE') .setDescription(`Küfür engel sistemi açık değil!`)).then(m => m.delete(({ timeout: 4000})));
    }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür-log"],
  permLevel: 0
};

exports.help = {
  name: 'küfürlog',
  description: '',
  usage: ''
}