const Discord = require("discord.js");
const moment = require("moment");
const db = require("orio.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");    
const prefix = ayarlar.prefix;
module.exports.run = async (client, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setFooter('Ravel Bot 💜  2020 © 2022')
	
    .setTitle(`:flag_tr: **Ravel Bot Yardım Menüsü** :flag_tr: `, client.user.avatarURL())
.setColor('ORANGE')
.setDescription(`> Ravel Botu davet etmek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`:no_entry:  \`${prefix}genel\``,true)
.addField(`__Moderasyon Komutları__`,`:no_entry:  \`${prefix}moderasyon\` `,true)
.addField(`__Koruma Komutları__`,`:no_entry:  \`${prefix}koruma\`  `,true)
.addField(`\n __Bilgilendirme__ \n\n`,` \`${prefix}istatistik\` | Ravel Bot'un istatistiklerini gösterir. \n \`${prefix}ping\` | Ravel Bot gecikme durumunu gösterir.`)
.setThumbnail(client.user.avatarURL)
.setImage('https://i.hizliresim.com/bv3gvn9.gif')

  msg.channel.send(çekiliş);
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "yardım"
  };