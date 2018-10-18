module.exports.run = (bot, message, args, Discord) => {
 if (!message.member.hasPermission(["BAN_MEMBERS"])) return;
    let member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone to ban.").then(message.delete(10))
    let reason = args.slice(1).join(' ');
    if (!reason) {
        if (member.displayName) {
            member.ban().then(message.channel.send(`Okay, just banned ${member.displayName}.`))
        } else {
            member.ban().then(message.channel.send(`Okay, just banned ${member.user.username}.`))
        }
    } else {
        if (member.displayName) {
            member.ban(reason).then(message.channel.send(`Okay, just banned ${member.displayName}.`))
        } else {
            member.ban(reason).then(message.channel.send(`Okay, just banned ${member.user.username}.`))
        }
}

}

module.exports.help = {
  name: "ban"
  }
