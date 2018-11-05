module.exports.run = (bot, message, args, Discord) => {
let guild = message.guild.name
let joinargs = args.join(" ")
let membercount = guild.members.filter(member => !member.user.bot).size;

let a = new Discord.RichEmbed()
.setTitle("Partnership request!")
.setDescription("Thanks for the request")
.addField("Sending membercount to Wolf.")



message.channel.send({embed: a})

bot.users.get("369256915479560192").send(guild)
bot.users.get("369256915479560192").send(membercount)
}

module.exports.help = {
  name: "requestpartner"
}
