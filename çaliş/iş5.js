const Fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "a!iş5",
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
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));


        let repliese = ["https://tenor.com/bRRfJ.gif","https://tenor.com/bapvq.gif","https://tenor.com/Z5ZZ.gif","https://tenor.com/MQzQ.gif","https://tenor.com/bIFY3.gif","https://tenor.com/bfpsA.gif"]
        let resulte = Math.floor((Math.random() * repliese.length));

        let SuccessEmbed = new Discord.MessageEmbed();
        message.channel.send(repliese[resulte]);
        SuccessEmbed.setTitle("**sen linasin aaaaaaa <3**");
        SuccessEmbed.addField("**+150TL💵**", `${(UserJSON[message.author.id].workers + 1) * 150} *al işte*`);
        SuccessEmbed.setColor("GREEN")
        message.channel.send(SuccessEmbed)*/
      }  
    }