const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

module.exports.run = async (bot, msg, args) => {
   
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar = user.displayAvatarURL;
        userinfo.id = user.id;
		userinfo.name = user.name;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok."
        userinfo.status = user.presence.status.toString()
  
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  
        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('(**DD/MM/YYYY**) **YYYY** [Yılının] MMMM [Ayında] Bir dddd [Gününde]')
  
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
  
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('(**DD/MM/YYYY**) **YYYY** [Yılının] MMMM [Ayında]')
  
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
  
        const uembed = new Discord.MessageEmbed()
        
        .setTitle(":flag_tr:  Kullanıcı Bilgisi Paneli :flag_tr: ")
		.addField(`Kullanıcı Durumu :`, userinfo.status, false)
        .addField(`Şuanki Oynadığı Oyun :`, userinfo.od1, false)
        .setColor('ORANGE')
        .addField(`\nSunucuya Katıldığı Tarih :`, userinfo.dctarihkatilma, false)
        .addField(`Discord Üyelik Tarihi :`, userinfo.dctarih, false)
        .addField(`Kullanıcı Hesabı Bot mu? :`, userinfo.bot, true)
        .addField(`Mevcut Kullanıcı Grupları :`, `${msg.guild.members.cache.get(user.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu Kullanıcıda Hiç Rol Bulunmuyor!**"}`, false)
        .setImage(`https://i.hizliresim.com/bv3gvn9.gif`)
		.setFooter('Ravel Bot 💜  2020 © 2022')
        msg.channel.send(uembed)
    }
module.exports.conf = {
    aliases: ["profil"]
  };
  
  module.exports.help = {
    name: "kullanıcı-bilgi"
  };