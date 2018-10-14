const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Hello") {
        message.channel.send("Hai juga!");

        return;
}

    if (message.content == "woy") {
        message.channel.send("apa");

        return;

    }
     if (message.content == "server status"){
         message.channel.send("Masih Tahap Pengembangan");
         
     }
    

});

bot.login(process.env.BOT_TOKEN);
