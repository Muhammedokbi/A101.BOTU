const Fs = require("fs")
const Discord = require("discord.js")

  module.exports = {
    name: "a!çanta",
    execute(message, args){
            // Action Here
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
          
            if (!UserJSON[message.author.id]) {
              message.channel.send("amk sen kayıt yap!!")
              return;
          }
          
            let mentioned = message.mentions.members.first();
            if (mentioned) {
                if (!UserJSON[mentioned.id]) {
                  message.channel.send("O kişi kayıtlı değil💔")
                    return;
                }
                message.channel.send(`# bu da onun çantasi<3\n\n${UserJSON[message.author.id].UŞarap1}:🍻| |${UserJSON[message.author.id].taksiplakası}:🚕| |${UserJSON[message.author.id].Karabüyükağıtları}:🐜->\n${UserJSON[message.author.id].Ubarbi}:<:flushed:1041068239385530398>| |${UserJSON[message.author.id].Uçikolata}:🍫| |${UserJSON[message.author.id].Upepesi}🧋->\n${UserJSON[message.author.id].Uturkkahvaltisi}:☕| |${UserJSON[message.author.id].Ucips}:🍟| |${UserJSON[message.author.id].Uekmek}:🥖->\n${UserJSON[message.author.id].Umoco}:<:IMG_1744:1045955870120476703>| |${UserJSON[message.author.id].Ukan}:🩸| |${UserJSON[message.author.id].Ubilgisayar}:🖥️->\n${UserJSON[message.author.id].Ufantezimalzemesi}:⛓️| |${UserJSON[message.author.id].Udkklasikyağmasaji}:🏩| |${UserJSON[message.author.id].UMOMGANGYAZILIBİLEKLİK}:📯->`)
                return;
            } else {
message.channel.send(`   # bu da sen nin çantan<3\n\n        ${UserJSON[message.author.id].UŞarap1}:🍻| |        ${UserJSON[message.author.id].taksiplakası}:🚕| |        ${UserJSON[message.author.id].Karabüyükağıtları}:🐜->\n        ${UserJSON[message.author.id].Ubarbi}:<:flushed:1041068239385530398>| |        ${UserJSON[message.author.id].Uçikolata}:🍫| |        ${UserJSON[message.author.id].Upepesi}🧋->\n        ${UserJSON[message.author.id].Uturkkahvaltisi}:☕| |        ${UserJSON[message.author.id].Ucips}:🍟| |        ${UserJSON[message.author.id].Uekmek}:🥖->\n        ${UserJSON[message.author.id].Umoco}:<:IMG_1744:1045955870120476703>| |        ${UserJSON[message.author.id].Ukan}:🩸| |        ${UserJSON[message.author.id].Ubilgisayar}:🖥️->\n        ${UserJSON[message.author.id].Ufantezimalzemesi}:⛓️| |        ${UserJSON[message.author.id].Udkklasikyağmasaji}:🏩| |        ${UserJSON[message.author.id].UMOMGANGYAZILIBİLEKLİK}:📯->`)
                return;
            }
          }   
    }