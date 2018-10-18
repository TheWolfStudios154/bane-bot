module.exports.run = (bot, message, args, Discord) => {
let joinargs = args.join(" ")

message.channel.send(joinargs).then(message.delete(0))
}

module.exports.help = {
  name: "say"
  }
