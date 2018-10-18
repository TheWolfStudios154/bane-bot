module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Bane Bot Ping")
.setDescription("Heres my ping!")
.addField("Ping", `${Math.floor(bot.ping)}`)
.setColor("GREEN")

message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping"
}
