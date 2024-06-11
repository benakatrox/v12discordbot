const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (client, message, args) => {
  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (err) message.channel.send(err);
    if (result === undefined || result.length === 0) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription("Lütfen bir yer gir.")
          .setColor("RED")
          .setFooter('Ravel Bot 💜  2020 © 2022')
      ).then(m => m.delete(({ timeout: 2000})));
      return;
    }
    var current = result[0].current;
    var tahminler = result[0].forecast;
    var location = result[0].location;
    const embed = new Discord.MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setTitle(current.skytext
      .replace(`Sunny`, `Güneşli`)
      .replace(`Partly`, `Kısmen`)
      .replace(`Mostly`, `Çoğunlukla`)
      .replace(`Rain`, `Yağmurlu`)
      .replace(`Light`, `Hafif`)
      .replace(`Cloudy`, `Bulutlu`)
      .replace(`Clear`, `Açık`))
      .setAuthor(`${current.observationpoint} için hava durumu`)
      .setThumbnail(current.imageUrl)
      .setColor("ORANGE")
      .addField("Zaman Dilimi", `UTC${location.timezone}`, true)
      .addField("Derece Türü", location.degreetype, true)
      .addField("Sıcaklık", `${current.temperature} Derece`, true)
      .addField("Hava", `${current.feelslike}`, true)
      .addField("Rüzgar", current.winddisplay
      .replace(`West`, `Batı`)
      .replace(`North`, `Kuzey`)
      .replace(`East`, `Doğu`)
      .replace(`South`, `Güney`)
      .replace(`west`, `Batı`)
      .replace(`north`, `Kuzey`)
      .replace(`east`, `Doğu`)
      .replace(`south`, `Güney`), true)
      .addField("Nem", `${current.humidity}%`, true)
      .addField("En yüksek sıcaklık", tahminler[0].high, true)
      .addField("En düşük sıcaklık", tahminler[0].low, true)
      .addField("Nem", `${current.humidity}%`, true)
      .setTimestamp()
      .setFooter('Ravel Bot 💜  2020 © 2022')
    message.channel.send({ embed }).then(m => m.delete(({ timeout: 12000})));
  });
}
module.exports.conf = {
  aliases: ["hava","havadurumu"]
};

module.exports.help = {
  name: "hava-durumu"
};
