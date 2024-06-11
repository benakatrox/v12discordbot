const Discord = require('discord.js');
const database = require('croxydb');

exports.run = (client, message, args) => { 
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmen için **Mesajları Yönet** yetkinin olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
message.channel.delete()
let limit = message.channel.userLimit;
let sıra = message.channel.position;
let toc = message.channel.topic;
let kategoriID = message.channel.parentID;
      message.guild.channels.create(message.channel.name,{type:message.channel.type}).then(kanal => {
      let z = kanal.guild.channels.cache.get(kanal.id)
      z.setParent(z.guild.channels.cache.find(channel => channel.id === kategoriID))
      z.edit({position:sıra,topic:toc,userLimit:limit})
        const mesaj = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setTitle(':flag_tr:  **Kanal Temizleyicisi** :flag_tr: ')
        .setDescription('Bu kanaldaki tüm mesajlar temizlenmiştir.')
        .setFooter('Ravel Bot 💜  2020 © 2022')
        z.send(mesaj)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nuke"],
  permLevel: 0
};

exports.help = {
  name: 'kanalı-temizle',
  description: 'Kanalı temizler',
  usage: 'kanalı-temizle'
};