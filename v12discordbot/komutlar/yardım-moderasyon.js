const Discord = require("discord.js");
const moment = require("moment");
const db = require("orio.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");    
const prefix = ayarlar.prefix;
module.exports.run = async (client, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setFooter('Ravel Bot 💜  2020 © 2022')
    .setTitle(`:flag_tr:  **Ravel Bot Genel Komutlar** :flag_tr: `, client.user.avatarURL())
.setColor('ORANGE')

.setDescription(`

\`${prefix}yaz\` Bir yazı yazarsınız.
\`${prefix}sil\` Belirlediğiniz adet mesaj silersiniz.
\`${prefix}kanalı-temizle\` Belirlediğiniz kanalı siler ve tekrardan açar. (Kanaldaki tüm sohbeti temizlemek için kullanılır.) (Dikkat kanal ayarları ve izinleride sıfırlar!)
\`${prefix}çekiliş\` Bir çekiliş başlatırsınız.
\`${prefix}oylama\` Bir oylama başlatırsınız.
\`${prefix}destek aç / kapat\` Destek talebi sistemi kurarsınız yada kapatırsınız.
\`${prefix}log\` Moderasyon log kanalını belirlersiniz. (Rol silme / Kanal silme ve bir çok logu belirtir.)

\`${prefix}otocevap-ekle\` Bir otocevap eklersiniz.
\`${prefix}otocevap-liste\` Otocevap listesine bakarsınız.
\`${prefix}otocevap-sil\` Bir otocevap silersiniz.

\`${prefix}otorol-ayarla\` Oto-Rol sistemini ayarlarsınız.
\`${prefix}otorol-kapat\` Oto-Rol sistemini kapatırsınız.
\`${prefix}otorol-mesaj\` Oto-Rol sistemi için giriş mesajlarını belirlersiniz. (Belirlemezseniz sistem tarafından ayarlanan klasik mesajı atar.)
\`${prefix}otorol-mesaj-sıfırla\` Oto-Rol mesajını sistem tarafından ayarlanan klasik mesaja geri çevirirsiniz.

\`${prefix}sayaç\` Sayaç sistemi için sayı belirlersiniz.
\`${prefix}sayaç kapat\` Sayaç sistemini kapatırsınız.
\`${prefix}sayaç-kanal-ayarla\` Sayaç sisteminin giriş çıkış mesajı atacağı kanalı belirlersiniz.

\`${prefix}kullanıcı-bilgi\` Bir kullanıcının profilini görüntülersiniz.
\`${prefix}sunucu-bilgi\` Sunucu hakkında bilgiler alırsınız.

**:flag_tr:  Kullanıcı Kayıt Sistemi Komutları :flag_tr: **

\`${prefix}kayıtol\` Kullanıcılar bu komut ile sunucunuza kayıt olur.
\`${prefix}kayıtol-kanal\` Kullanıcıların kayıt olacağı kanalı ayarlarsınız.

Peki normal kayıt ile aralarındaki fark ne? Kullanıcı kayıt sistemi belirlediğiniz kanala kullanıcılar kendileri İsim ve Yaşlarını belirterek kayıt olur.\n
Yetkili kayıt sisteminde bir yetkili kullanıcıları Kız veya Erkek olarak kayıt eder.
İki sistem içinde kayıt-yetkilisi & alınacak-rol & verilecek-rol ayarlamanız lazımdır. Ayrıca kullanıcı kaydı silmek isterseniz de iki sistem içinde kayıt-yetkilisi ayarlamanız gereklidir.

**:flag_tr:  Yetkili Kayıt Sistemi Komutları :flag_tr: **

\`${prefix}e\` Bir erkek kullanıcı kaydı yaparsınız.
\`${prefix}k\` Bir kız kullanıcı kaydı yaparsınız.
\`${prefix}erkek-rol\` Kayıt sistemi için bir erkek rolü belirlersiniz.
\`${prefix}kız-rol\` Kayıt sistemi için bir kız rolü belirlersiniz.
\`${prefix}alınacak-rol\` Kayıt olan kullanıcıdan alınacak rolü belirlersiniz. (Kayıtsız Rolü)
\`${prefix}verilecek-rol\` Kayıt olan kullanıcıya verilecek rolü belirlersiniz. (Kayıtlı Rolü) (Belirlemezseniz kullanıcı kayıt edildiğinde sadece **Erkek** yada **Kız** rolü verir.)
\`${prefix}alınacak-rol sıfırla\` Kayıt olan kullanıcıdan alınacak rolü sıfırlarsınız.
\`${prefix}verilecek-rol sıfırla\` Kayıt olan kullanıcıya verilecek rolü sıfırlarsınız.
\`${prefix}kayıt-yetkilisi\` Kayıt yetkilisi rolünü belirlersiniz.
\`${prefix}kayıt-kanal\` Kayıt sistemi için bir kayıt yapma kanalı belirlersiniz.
\`${prefix}kayıt-hoşgeldin\` Kayıt sistemi için bir hoşgeldin kanalı belirlersiniz. (Aynı zamanda bu sistem belirlediğiniz kanala kullanıcının hesabının güvenilir olup olmadığı bilgisinide göndermektedir.)
\`${prefix}kayıt-sil\` Kayıtlı bir kullanıcının tamamen kaydını silersiniz. (Kayıt silindiğinde kullanıcıya ayarlanan **Kayıtsız** rolünü verir ve kullanıcının adını **Lütfen Kayıt Yaptırınız** olarak değiştirir.)
`)  

.addField(`\n __Bilgilendirme__ \n\n`,` \`${prefix}istatistik\` | Ravel Bot'un istatistiklerini gösterir. \n \`${prefix}ping\` | Ravel Bot gecikme durumunu gösterir.`)
.setThumbnail(client.user.avatarURL)
.setImage('https://i.hizliresim.com/bv3gvn9.gif')

  msg.channel.send(çekiliş);
};
module.exports.conf = {
    aliases: []
  };
  
  module.exports.help = {
    name: "moderasyon"
  };