const Discord = require('discord.js');
const database = require('croxydb');

module.exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription('Ravel Bot Ölçüm Yapılıyor.')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    setInterval(() => {
   const only = new Discord.MessageEmbed()
   
   .setDescription(`\nMesajlardaki Gecikme Süresi : **${diff}/s** \n\nRavel Bot Gecikme Süresi : **${API}/s**`)
   .setColor('ORANGE')
   
    mesaj.edit(only);
    }, 5000)
  
  
};

module.exports.conf = {
  aliases: ["gecikme"]
};

module.exports.help = {
  name: "ping"
};