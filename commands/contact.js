module.exports.run = (bot, message, args, Discord) => {
let joinargs = args.join(" ")

let em = new Discord.RichEmbed()
.setTitle("Contacting Owner")
.setDescription(`Contacting owner for reason: ${joinargs}`)
message.channel.send({embed: em})

let emb = new Discord.RichEmbed()
.setTitle("You got mail")
.setDescription(`Message from ${message.author.username}, ID: ${message.author.id}`)
.addField("Reason for contact:", joinargs)

bot.users.get("369256915479560192").send({embed: emb})

}

module.exports.help = {
  name: "contact"
  }
