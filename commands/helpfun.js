module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Fun commands")
.setDescription("Heres my fun commands!!")
.addField("Commands:", "number \nsay \nping")
.setColor("GREEN")
.setFooter(`Requested by ${message.author.DisplayName}`)
message.channel.send({embed: em})

}

module.exports.help = {
name: "helpfun"
}
