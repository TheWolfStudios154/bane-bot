module.exports.run = (bot, message, args, discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Bane Help System")
.setDescription("Hello there!!")
.addField("Coming Soon", "The devs are still working on commands")

message.channel.send({embed: emb})
}

module.exports.help = {
  name: "help"
}
