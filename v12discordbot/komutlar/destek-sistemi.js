const Discord = require("discord.js");
const db = require("orio.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let prefix = ayarlar.prefix

  if (!message.member.hasPermission("MANAGE_GUİLD")) return message.channel.send(`**Buna Yetkin Yok!**`);
  if (!["kapat", "aç"].includes(args[0])){
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor(`${client.user.username} Destek Sistemi`)
        .setDescription(`**\`${prefix}destek aç @DestekYetkiliRol #DestekKanal\` veya \`${prefix}destek kapat\`**`)
        .setFooter('Ravel Bot 💜  2020 © 2022'))
  }
  
  if (args[0] == "kapat") {
    if(!db.get("csticket."+message.guild.id)) return message.reply("**Destek Sistemi Bu Sunucuda Zaten Kurulu Değil!**")
    const data = db.get("csticket."+message.guild.id)
    db.delete(`csticket.${message.guild.id}`);
    const sunucu = client.guilds.cache.get(data.sunucuID)
       if(!sunucu){
      db.delete("csticket."+data.sunucuID)
    } else {
    const kanal = sunucu.channels.cache.get(data.kanal)
       if(!kanal){
      db.delete("csticket."+data.sunucuID)
    } else {
    const data2 = kanal.messages.fetch(data.mesajID)
    if(!data2){
      db.delete("csticket."+data.sunucuID)
    } else {
      data2.then(mr => mr.delete({timeout:200}))
        let a = message.guild.channels.cache.find(xxx => xxx.name === "DESTEK");
      if(a){
        a.delete()
      }
       message.channel.send(`**Destek Sistemi Başarıyla Kapatıldı!**`);
    }
    }
    }

  }

  if (args[0] == "aç") {
        
    const data = db.get("csticket."+message.guild.id)
    if(data) return message.reply("Zaten Destek Sistemi Bu Sunucuda Açık!\nKapatmak İçin \`"+prefix+"destek kapat\`")
    
    let role = message.mentions.roles.first() 
    if(!role) return message.reply("**Bir Destek Ekibi Rolü Etiketlemen Gerek!**")

    let akanal = message.mentions.channels.first()
    if(!akanal) return message.reply("**Bir Kanal Etiketlemen Gerek!**")
    
    message.react("✅")   
    
      akanal.send(new Discord.MessageEmbed()
                 .setTitle(":flag_tr:  Destek Sistemi :flag_tr: ")
                 .setColor("ORANGE")
                 .setDescription("Destek Talebi Oluşturmak İçin 📨 Emojisine Tıkla!")
				 .setFooter('Ravel Bot 💜  2020 © 2022')
                 ).then(async cs => {
        await cs.react("📨")
        db.set("csticket."+message.guild.id, {
          kanal: akanal.id, 
          mesajID: cs.id,
          sunucuID: message.guild.id,
          rolID: role.id
          })
      })
  }
};
exports.conf = {
  aliases: ["ticket","ticket-sistemi"]
};

exports.help = {
  name: "destek"
};
