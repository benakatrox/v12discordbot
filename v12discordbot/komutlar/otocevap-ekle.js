const Discord = require("discord.js")
const db = require('orio.db')

module.exports.run = async (bot, message, args) => {
  const erdem = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || erdem.prefix 

  const embeddd = new Discord.MessageEmbed()
  .setDescription('Bu Komutu Kullanmak İçin `Sunucuyu Yönet` Yetkisi Lazım!')
  .setColor("RED");

                let mentionEmbed = new Discord.MessageEmbed()
                     .setDescription(`Lütfen \`komut\` - \`gönderilecek şey\` olarak kullanınız.\nÖrnek: \`${prefix}özel-komut-ekle minecraft-ip play.serveripniz.com\``)
                     .setColor('ORANGE')
               var user = message.mentions.users.first() || message.author;
if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embeddd)
                     if (!args[0]) return message.channel.send(mentionEmbed)
                     if (!args[1]) return message.channel.send(mentionEmbed) 
                
                     let komut;
                     if (!args[0]) komut = ''; 
                     else komut = (args[0]); 
 if(args[0] == 'yardım' || args[0] == 'bilgi') return message.channel.send('Botun varolan bir komudunu ekleyemezsin.')                   
  let gonderileceksey;
                     if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
                     else gonderileceksey = args.slice(1, 1000, args[1]).join(' '); 
                
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`Bu sunucuya özel komut eklendi.`, `\`${komut}\` yazıldığı zaman \`${gonderileceksey}\` olarak yanıt verecek.`)
                     .setColor('ORANGE')
                     db.set(`sunucuKomut_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) 
                     };

module.exports.conf = {
    aliases: [""]
  };
  
  module.exports.help = {
    name: "otocevap-ekle"
  };