const Discord = require("discord.js")
const fs = require("fs")
const ayarlar = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("ORANGE")
.setAuthor(``, client.user.avatarURL())
.setTitle(":flag_tr:  Ravel Bot Davet :flag_tr: ")
    .addField(
      "Bot Linkleri",
      `> :no_entry:  Bot Davet Linkimiz: **[Tıkla](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=8&scope=bot)**\n> :no_entry:  Oy Linkimiz: **[Tıkla](https://)**`
    )
    .addField(
      "Sponsor / İş Ortakları",
      `> :no_entry:  <@ID>`
    )
  .setImage("https://i.hizliresim.com/bv3gvn9.gif")
.setFooter('Ravel Bot 💜  2020 © 2022')
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };
 module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "davet"
};