module.exports.run = (bot, message, args, Discord) => {
let emb = new Discord.RichEmbed()
.setTitle("Bane Help System")
.setDescription("Hello there!!")
.addField("Command lists", "Fun \nUtilty \nModeration")

message.channel.send({embed: emb})
}

module.exports.help = {
  name: "help"
}
