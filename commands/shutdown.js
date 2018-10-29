const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Bane Bot Shutting-Down...")
  .setDescription(":wave: Shutting-Down...")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .setColor("RED")
 

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .catch(err => console.error(err))
  }
  if (config.ownerid.includes(message.author.id)) {
    restart(message.channel)
  } else {
    message.channel.send("Owner only, you cannot use this command.")
  }
}

module.exports.help = {
  name: "die"
}
