const Fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "a!iş2",
    execute(message, args){
        message.channel.send("şimdilik yok");
       /* let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
      
        if (!UserJSON[message.author.id]) {
            message.channel.send("amk sen kayıt yap!!")
            return;
        }
    
        let deltaTime = Math.floor((new Date().getTime() - UserJSON[message.author.id].lastwork) / (100 * 30));
        if (deltaTime < 1) {
            message.channel.send(`${1 - deltaTime} dk sonra bir daha çalışabilirsin💔`);
            return;
        }
    
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers + 1) * 30;
        UserJSON[message.author.id].taksiplakası += (UserJSON[message.author.id].workers + 1) * 1;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
    
        let SuccessEmbed = new Discord.MessageEmbed();
        SuccessEmbed.setThumbnail("https://tenor.com/5JE7.gif");
        SuccessEmbed.setTitle("*Bulunan şeyler!! **Hey linanın dedesinin evine girdin ayıp**");
        SuccessEmbed.addField("**+30TL💵**", `${(UserJSON[message.author.id].workers + 1) * 30} *buldun*`);
        SuccessEmbed.addField("**taksi plakasi**🚕",`${(UserJSON[message.author.id].taksiplakası = 1) * 1} *taksi palakası*`);
        SuccessEmbed.setColor("GREEN")
        message.channel.send(SuccessEmbed)*/
    }  
    }
