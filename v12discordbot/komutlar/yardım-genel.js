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
\`${prefix}minecraft\` Seçtiğiniz minecraft karakterinin resmini gösterir.
\`${prefix}hava-durumu\` Seçtiğiniz şehirin hava durumu bilgisini gösterir.
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
    name: "genel"
  };