const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
     bot.user.setGame('https://discord.gg/6kVDedM');

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
    if (message.content == "Link Discord"){
        message.channel.send("https://discord.gg/6kVDedM");
        
        return;
        
    }
    
     if (message.content == "Testing"){
         message.channel.send ("/rep @! ! R4ku");
         return;
         
     }
      
      if (message.content == "End"){
        message.channel.send("wawadwadwadwad");
    }
     
    let prefix = "/"
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if (command === "say") {
    //if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS'))
    //if (message.author.id !== "130515926117253122") return;
    message.channel.send(args.join(" "));
  } 
   
    

});

bot.login(process.env.BOT_TOKEN);
