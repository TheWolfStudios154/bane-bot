const config = require(../config.json)
const ownerid = config.ownerid

module.exports.run = (bot, message, args, Discord) => {
  if(ownerid.includes(message.author.id)){
    let joinargs = args.join(" ")
    let emb = new Discord.RichEmbed()
    .setTitle("BaneBot Updates!")
    .setDescription("Heres my updates!")
    .addField("Update includes:", joinargs)
    
  }
}
