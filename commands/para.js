const Fs = require("fs");
const Discord = require('discord.js')
module.exports = {
    name: "a!para",
    execute(message, args){
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
    
            if (!UserJSON[message.author.id]) {
                message.channel.send("amk sen kayıt yap!!");
                return;
            }
            let mentioned = message.mentions.members.first();
            if (mentioned) {
                if (!UserJSON[mentioned.id]) {
                    message.channel.send("o kişi kayıtlı değil ki");
                    return;
                }
                let SuccessEmbed = new Discord.MessageEmbed();
                SuccessEmbed.addField("💸para💸",UserJSON[mentioned.id].para);
                SuccessEmbed.setFooter('A101_', message.author.displayAvatarURL({dynamic: true}));
                message.channel.send(SuccessEmbed);
                return;
            } else {
                let SuccessEmbed = new Discord.MessageEmbed();
                SuccessEmbed.addField("💸para💸",UserJSON[message.author.id].para);
                SuccessEmbed.setFooter('A101_', message.author.displayAvatarURL({dynamic: true}));
                message.channel.send(SuccessEmbed);
                return;
            }
        }  
    }