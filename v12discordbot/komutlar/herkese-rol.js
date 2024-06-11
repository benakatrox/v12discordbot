const Discord = require("discord.js");
const db = require("orio.db");

module.exports.run = async (client, message, args) => {
  var bot = "bot id nizi buraya yazın";
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "❌ **Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.get(args[0]) ||
    message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.send(
      "❌ **Herkese Rol Verebilmem İçin Bir Rol Etiketlemelisin!**"
    );

  const embed = new Discord.MessageEmbed()
    .setDescription(`✅ **Herkese ${rol} Adlı Rol Verildi!**`)
    .setColor(rol.hexColor);

  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
  });
  message.channel.send(embed);
};

module.exports.conf = {
  aliases: [""]
};

module.exports.help = {
  name: "herkese-rol"
};