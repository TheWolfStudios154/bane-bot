const discord = require('discord.js');
const config = require(`../config.json`);


function sendAnnounce(bot, message, args, guild) {
  var sendChannel = "";
  
  if (guild.channels.find("name", "announcements")) {
    sendChannel = guild.channels.find("name", "announcements");
  } else if (guild.channels.find("name", "chat")) {
    sendChannel = guild.channels.find("name", "chat");
  } else if (guild.channels.find("name", "lounge")) {
    sendChannel = guild.channels.find("name", "lounge");
  } else if (guild.channels.find("name", "general")) {
    sendChannel = guild.channels.find("name", "general");
  }

  let announce = new discord.RichEmbed()
    .setColor("7289DA")
    .setAuthor(`${bot.user.username} Announcement`)
    .setDescription(`**Hello there! The creator of Bane Bot, (<@369256915479560192> Wolf) need to send you an announcement. Here it is! **\n${args.join(' ')}\n\n**This message was sent to *${guild.name}* on purpose from the creator.**\n*Please be aware that this announcement system will not be spammed.*`)
    .setFooter(`An official announcement from Wolf`, bot.user.avatarURL)
    .setTimestamp();

  if (sendChannel !== "") {
    sendChannel.send({ embed: announce })
      .then(() => {
        message.channel.send(`Sent announcement to ${guild.name}`).then(m => m.delete(20000));
      })
      .catch(err => {
        message.channel.send(`Failed to send announcement to ${guild.name} (Send Error)`).then(m => m.delete(20000));
      });
  } else {
    message.channel.send(`Failed to send announcement to ${guild.name} (No channel)`).then(m => m.delete(20000));
  }
}
module.exports.run = (bot, message, args) => {
  if (!config.ownerid.includes(message.author.id)) return message.channel.send("Owner only, you cannot use this command.");      
  //return; // SOON
  let announceTest = new discord.RichEmbed()
    .setColor("7289DA")
    .setAuthor(`Test Announcement`, bot.user.avatarURL)
    .setDescription(`**Hello Wolf here, just sending an announcement...**\n${args.join(' ')}\n\n**This message was sent to *${message.guild.name}* on purpose from the creator.**\n*Please be aware that this announcement system will not be spammed.*`)
    .setFooter(`Test Example; reply with yes to send to every server!`)
    .setTimestamp();

  message.channel.send({ embed: announceTest })
    .then((m) => {
      message.channel.awaitMessages(response => response.content.toLowerCase() === 'yes', {
          max: 1,
          time: 10000,
          errors: ['time'],
        }).then((collected) => {
          m.delete();
          collected.first().delete();
          message.channel.send(`Now sending an announcement to every guild I'm in! [${bot.guilds.array().length} guilds]`).then(m => m.delete(10000));
          bot.guilds.forEach((guild, id) => {
            sendAnnounce(bot, message, args, guild);
          });
        })
        .catch(() => {
          message.channel.send(`Announcement canceled`).then(m => m.delete(5000));
          m.delete();
        });
    });
};

module.exports.help = {
  name: "announce"
}
