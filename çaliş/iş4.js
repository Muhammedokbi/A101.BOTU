const Fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "a!iş4",
    execute(message, args){
        message.channel.send("şimdilik yok");
        /*let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
      
        if (!UserJSON[message.author.id]) {
            message.channel.send("amk sen kayıt yap!!")
            return;
        }
      
        let deltaTime = Math.floor((new Date().getTime() - UserJSON[message.author.id].lastwork) / (100 * 30));
        if (deltaTime < 1) {
            message.channel.send(`${1 - deltaTime} dk sonra bir daha çalışabilirsin💔`);
            return;
        }
      
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers + 1) * 90;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
      
        let SuccessEmbed = new Discord.MessageEmbed();
        SuccessEmbed.setThumbnail("https://tenor.com/bQ9qc.gif");
        SuccessEmbed.setTitle("**🏪Markette dükkanında çalışıyorsunuz artık🗝️**");
        SuccessEmbed.addField("**+90TL💵**", `${(UserJSON[message.author.id].workers + 1) * 90} *al işte*`);
        SuccessEmbed.setColor("GREEN")
        message.channel.send(SuccessEmbed)*/
      }    
    }
