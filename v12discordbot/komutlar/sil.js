const Discord = require("discord.js");
const db = require('croxydb')


module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`Bu komutu kullanabilmek için **MESAJLARI YONET** yetkisinin bulunduğun rolde olması gerekmektedir.`)).then(m => m.delete(({ timeout: 4000})));
  if (!args[0])
    return message.channel.send(new Discord.MessageEmbed().setColor('RED') .setDescription(`:no_entry:  En az **1** - **100** arasında bir değer giriniz.`)).then(m => m.delete(({ timeout: 4000})));
  message.channel.bulkDelete(args[0]).then(() => {
   const tamamdır = new Discord.MessageEmbed()
  .setColor("#f6ff00")    
  .setTitle(':no_entry:  **Başarılı İşlem** :no_entry: ')
  .setDescription(`\`${message.author.username}\` Başarıyla **${args[0]}** Mesajı Sildim`)
 message.channel.send(tamamdır)
   
   });
};

module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "sil"
};

