const Fs = require("fs");
require('../commands/kayıt')
module.exports = {
    name: "a!id-20",
    execute(message, args){
            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
            UserJSON[message.author.id].para += (UserJSON[message.author.id].workers - 1) * -250;
            UserJSON[message.author.id].Uekmek += (UserJSON[message.author.id].workers + 1) * 1;
            UserJSON[message.author.id].lastwork = new Date().getTime();
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
            
            message.channel.send("Sizden alınan miktar`-250`💸 aldığınız ürün`ekmek`🛒");
            }
        }