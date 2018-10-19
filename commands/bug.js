module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Bug report")
.setDescription("If so click the embeded link!")
.addField(`Need to report a bug?`, `[Github Issues](https://github.com/TheWolfStudios154/bane-bot/issues "Click here!")`)

message.channel.send({embed: em})
}

module.exports.help = {  
name: "bug"
}
