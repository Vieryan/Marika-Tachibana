const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
     bot.user.setGame('https://discord.gg/MyqHadv');

    bot.user.setStatus('Online');


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
         
         return;
         
     }
    
     if (message.content == "Testing"){
         message.channel.send ("/rep @! ! R4ku");
         return;
         
     }
      
      if (message.content == "End"){
        message.channel.send("wawadwadwadwad");
    }
   
    

});

bot.login(process.env.BOT_TOKEN);
