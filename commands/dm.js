module.exports.run = (bot, message, args, Discord) => {
let joinargs = args.join(" ")
let user = message.mentions.members.first();

bot.users.find('name', user).send(joinargs)
}

module.exports.help = {
name: "dm"
}
