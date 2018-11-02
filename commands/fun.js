module.exports.run = (bot, message, args, Discord) => {
let user = message.author.username
let pranked = message.author.id

bot.users.get(pranked).send("heh pranked")


}
module.exports.help = {
  name:  "pranked"
}
