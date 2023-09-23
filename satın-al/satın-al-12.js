const Fs = require("fs");
module.exports = {
    name: "a!id-5",
    execute(message, args){
        let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
        UserJSON[message.author.id].para += (UserJSON[message.author.id].workers - 1) * -525;
        UserJSON[message.author.id].UUMOMGANGYAZILIBİLEKLİK += (UserJSON[message.author.id].workers + 1) * 1;
        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
        
        message.channel.send("Sizden alınan miktar`-525`💸 aldığınız ürün`MOM GANG YAZILI BILEKLIK`🛒");
        }
}