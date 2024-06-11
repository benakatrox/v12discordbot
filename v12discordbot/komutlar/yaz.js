const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("```☃ Bu komutu kullanmaya  yetkin yetmiyor. (Mesajları Yönet)```").then(m => m.delete({ timeout: 2000}));
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK') .setDescription(`Yazmam için birşeyler söylemelisin. Ne yazacağımı bilmeden ne yapmamı istiyorsun. :D`)).then(m => m.delete(({ timeout: 4000})));
    message.delete();
    const embed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setDescription(`${mesaj}`)
    .setFooter('Ravel Bot 💜  2020 © 2022')
    return message.channel.send(embed);
}
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "yaz"
};
