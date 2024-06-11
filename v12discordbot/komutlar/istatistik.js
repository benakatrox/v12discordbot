const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let motion = new Discord.MessageEmbed()
	.setTitle(':flag_tr:  **Ravel Bot İstatistiklerimiz** :flag_tr: ')
    .addField(
      "Veriler",
      `> :satellite:  Toplam sunucu: **${
        client.guilds.cache.size
      }** \n> :satellite:  Toplam kullanıcı: **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n> :satellite:  Toplam kanal: **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "Bot Sahipleri",
      `> :flag_tr:  Bot Sahipleri: <@998941587612639295> / <@324984435214647298>`
    )
    .addField(
      "Sürüm Geçmişi",
      `> :star:  Discord.JS sürümü: **v${Discord.version}**\n\n> :star:  Node.js sürümü: **${process.version}**\n\n`
    )
    .addField(
      "Sponsor / İş Ortakları",
      `> :no_entry:  <@ID>`
    )
    .setImage("https://i.hizliresim.com/bv3gvn9.gif")
    .setFooter('Ravel Bot 💜  2020 © 2022')
    .setColor("ORANGE");
  message.channel.send(motion);
};

module.exports.conf = {
    aliases: ["botistatistik","i"]
  };
  
  module.exports.help = {
    name: "istatistik"
  };