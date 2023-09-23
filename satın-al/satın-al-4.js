
     const Fs = require("fs");
     module.exports = {
         name: "a!is-!!",
         execute(message, args){
         let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
         UserJSON[message.author.id].para += (UserJSON[message.author.id].workers - 1) * 9999;
         UserJSON[message.author.id].Umoco += (UserJSON[message.author.id].workers + 1) * 1;
         UserJSON[message.author.id].lastwork = new Date().getTime();
         Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
         
         message.channel.send("Sizden alınan miktar`-9999`💸 aldığınız ürün`moco`🛒");
         }
                     }