const Fs = require("fs");
module.exports = {
    name: "a!id-1",
    execute(message, args){
        let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers - 1) * -5000;
        UserJSON[message.author.id].Ubilgisayar += (UserJSON[message.author.id].workers + 1) * 1;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
        
        message.channel.send("Sizden alınan miktar`-5K`💸 aldığınız ürün`bilgisayar`🛒");
        }
    }