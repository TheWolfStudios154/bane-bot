const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
var prefix = "b!";

bot.commands = new Discord.Collection()


fs.readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on('ready', () => {
  bot.user.setActivity("Hello!")
  console.log("I'm alive!")
  bot.users.get("301506781878943745").send("Noob spammer active")


})

bot.on("message", message => {
  if(message.content == ":adam:") {
    message.channel.send("https://cdn.discordapp.com/attachments/500119135343083530/504097188905877504/unknown.png")
  }

})

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
  }
})

bot.login(process.env.Token)
