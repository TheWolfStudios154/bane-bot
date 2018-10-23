const Discord = require('discord.js');
const ownerids = require('../config.json').ownerid

module.exports.run = (bot, message, args) => {
    if (ownerids.includes(message.author.id)) {
    const content = message.content.split(' ').slice(1).join(' ');
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Not for your eyes');
    return message.channel.send(output, { code: 'js' }).then(m => m.delete(5000))
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Not for your eyes');

    return message.channel.send(err, { code: 'js' })
  }); 
    } else {
        message.channel.send("Owner only, you cannot use this command.")
    }
  }

module.exports.help = {
  name: "eval",
  usage: ``,
  information: "Welp"
}

module.exports.settings = {
  permission: "Creator",
  deleteresponder: true,
  category: "Info"
}
