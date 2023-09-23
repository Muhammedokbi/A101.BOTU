const Fs = require("fs");

module.exports = {
    name: "a!kumar",
    execute(message, args){  
        let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

        UserJSON[message.author.id].lastwork = new Date().getTime();
        Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
      
        let repliese1 = [ "<:IMG_1747:1045955857944432720>","<:IMG_1744:1045955870120476703>","<:IMG_1746:1045955922532507719>"]
        let resulte1 = Math.floor((Math.random() * repliese1.length));
        let repliese2 = [ "<:IMG_1746:1045955922532507719>","<:IMG_1747:1045955857944432720>","<:IMG_1744:1045955870120476703>"]
        let resulte2 = Math.floor((Math.random() * repliese2.length));
        let repliese3 = [ "<:IMG_1744:1045955870120476703>","<:IMG_1746:1045955922532507719>","<:IMG_1747:1045955857944432720>"]
        let resulte3 = Math.floor((Math.random() * repliese3.length));

        
           message.channel.send(`${repliese1[resulte1]} ${repliese2[resulte2]} ${repliese3[resulte3]}`); 
       }
    };