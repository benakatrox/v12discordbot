const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Sorgulanacak Minecraft karakter isimi giriniz.`)).then(m => m.delete(({ timeout: 2000})));
 if (mesaj == member) {
  message.reply(new Discord.MessageEmbed().setColor('RED') .setDescription(`Lütfen geçerli bir Minecraft premium karakter isimi giriniz.`)).then(m => m.delete(({ timeout: 2000})));
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('ORANGE')
   .setFooter('Ravel Bot 💜  2020 © 2022')
   .setTitle(':flag_tr:  Minecraft Karakter Sorgulama :flag_tr: ')
   .setImage(body)
 message.channel.send(mcbody);
 }
};

module.exports.conf = {
  aliases: [""]
};

module.exports.help = {
  name: "minecraft"
};