module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Bane Bots RNG")
.setDescription("Heres a random number!")
.addField("Number:", `${Math.floor(Math.random * 50000)}`)

message.channel.send({embed: em})
}

module.exports.help = {
    name: "number"
}
