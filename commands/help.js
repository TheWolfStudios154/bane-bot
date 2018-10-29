module.exports.run = (bot, message, args, Discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Bane Help System")
.setDescription("Hello there!!")
.addField("Moderation:", "Kick, /nBan")
.addField("Fun:", "Say, /nNumber, /nAnnoy")
.addField("Bot info", "Ping, /nBug, /nContact")
.addField("Developer", "Eval, /nAnnounce, /nRestart, /nDie")
.setColor("GOLD")
.setTimestamp()


message.channel.send({embed: emb})
}

module.exports.help = {
  name: "help"
}
