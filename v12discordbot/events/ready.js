const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        `${client.users.cache.size} Kullanıcı!`,
        `❤️ Ravel Bot 2020-2022`,
        `✨ 7/24 Aktif`,
        `🔔 Tamamen Güncellendi!`
    ];
                                                       
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random], { type: 'STREAMING' ,  url: 'https://www.twitch.tv/' });
        }, 2 * 3000);
        
  console.log(``);
  console.log(`------ BISMILLAHIRRAHMANIRRAHIM ------`);
  console.log(``);
  console.log(`Ravel Bot 2022: Tüm komutları hatasız bir şekilde başlattım.`);
  console.log(`Ravel Bot 2022: Tüm sunuculara ${client.user.username} ismi ile giriş yaptım.`);
  client.user.setStatus("dnd");
  console.log(``);
  console.log(`------ ! Ravel Bot 2022 Edition ! ------`);
  console.log(``);
  
  console.log(``);
  console.log ('_________________________________________');
  console.log(``);
  console.log (`Kullanıcı Adı      : ${client.user.username}`);
  console.log (`Toplam Sunucular   : ${client.guilds.cache.size}`);
  console.log (`Toplam Kullanıcı   : ${client.users.cache.size}`);
  console.log (`Botun Durumu       : Bot Çevrimiçi`);
  console.log ('_________________________________________');
  console.log(``);
};