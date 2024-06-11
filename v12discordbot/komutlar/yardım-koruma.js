const Discord = require("discord.js");
const moment = require("moment");
const db = require("orio.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");    
const prefix = ayarlar.prefix;
module.exports.run = async (client, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setFooter('Ravel Bot 💜  2020 © 2022')
    .setTitle(`:flag_tr:  **Ravel Bot Genel Komutlar** :flag_tr: `, client.user.avatarURL())
.setColor('ORANGE')

.setDescription(`
\`${prefix}reklam-log\` Reklam engel sisteminin loglarını gönderecek kanalı belirlersiniz.
\`${prefix}reklam-engel\` Reklam engel sistemini açar / kapatırsınız.

\`${prefix}küfür-log\` Küfür engel sisteminin loglarını gönderecek kanalı belirlersiniz. (Geçici olarak devre-dışı küfürü engelliyor fakat log göndermiyor.)
\`${prefix}küfür-engel\` Küfür engel sistemini açar / kapatırsınız.
`)   

.addField(`\n __Bilgilendirme__ \n\n`,` \`${prefix}istatistik\` | Ravel Bot'un istatistiklerini gösterir. \n \`${prefix}ping\` | Ravel Bot gecikme durumunu gösterir.`)
.setThumbnail(client.user.avatarURL)
.setImage('https://i.hizliresim.com/bv3gvn9.gif')

  msg.channel.send(çekiliş);
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "koruma"
  };



