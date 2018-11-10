const Discord = require('discord.js');
var bot = new Discord.Client();
const quiz = [
  { q: "Kalo lapar ngapain?", a: ["makan"] },
  { q: "Kalo ngantuk ngapain?", a: ["tidur"] },
  { q: "Gajah terbang keliatan?", a: ["boongnya"] }
];

const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

exports.run = async(bot, message, args) => {

const item = quiz[Math.floor(Math.random() * quiz.length)];
await message.channel.send(item.q);

try {

const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
const winnerMessage = collected.first();

return message.channel.send({embed: new Discord.RichEmbed()
.setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
.setTitle(`Correct Answer: ${winnerMessage.content}`)
.setFooter(`Question: ${item.q}`)
.setColor(message.guild.me.displayHexColor)

  })

} catch (_) {

return message.channel.send({embed: new Discord.RichEmbed()
.setAuthor('No one got the answer in time!')
.setTitle(`Correct Answer(s): \`${item.a}\``)
.setFooter(`Question: ${item.q}`)

    })
  }
}

exports.help = {
  name: "quiz"
};

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
