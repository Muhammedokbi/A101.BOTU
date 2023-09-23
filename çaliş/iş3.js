const Fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "a!iş3",
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
      
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers + 1) * 10;
        UserJSON[message.author.id].Şarap += (UserJSON[message.author.id].workers + 1) * 1;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
      
        let SuccessEmbed = new Discord.MessageEmbed();
        SuccessEmbed.setThumbnail("https://tenor.com/bV2TN.gif");
        SuccessEmbed.setTitle("**❤️‍🔥şarap dükkanında çalışıyorsunuz artık🍻**");
        SuccessEmbed.addField("**+10TL💵**", `${(UserJSON[message.author.id].workers + 1) * 10} *al işte*`);
        SuccessEmbed.addField("**hediye**🍷",`${(UserJSON[message.author.id].Şarap = 1) * 1} *Şarap*`);
        SuccessEmbed.setColor("GREEN")
        message.channel.send(SuccessEmbed)*/
      }   
    }