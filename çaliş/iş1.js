const Fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "a!iş1",
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
  
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers + 1) * 150;
        UserJSON[message.author.id].Karabüyükağıtları += (UserJSON[message.author.id].workers + 1) * 1;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  
        let SuccessEmbed = new Discord.MessageEmbed();
        SuccessEmbed.setThumbnail("https://cdn.discordapp.com/attachments/1020957857820180557/1029458067340922940/a0667815bb982ae0507a79977940e8c0.gif")
        SuccessEmbed.setTitle("**📞afferim bir kişinin hayatını kararttın!!🐜 sen ada misin yoksa <3**");
        SuccessEmbed.addField("**buda🗄️**", `${(UserJSON[message.author.id].workers + 1) * 150} *ödülün🕳️*`);
        SuccessEmbed.addField("**Bunlar kaldı ya😕**", `${(UserJSON[message.author.id].Karabüyükağıtları = 1) * 1} *Karabüyü kağıtları al🙂*`);
        SuccessEmbed.setColor("RANDOM")
        message.channel.send(SuccessEmbed);*/
    }  
    }