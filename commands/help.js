module.exports.run = (bot, message, args, Discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Bane Help System")
.setDescription("Hello there!!")
.addField("Moderation:", "Kick, Ban")
.addField("Fun:", "Say, Annoy")
.addField("Bot info", "Ping, Bug, Contact")
.addField("Developer", "Eval, Announce, Restart, Die")
.setColor("GOLD")
.setTimestamp()


message.channel.send({embed: emb})
}

module.exports.help = {
  name: "help"
}
