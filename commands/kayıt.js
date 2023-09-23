const Fs = require("fs");

module.exports = {
    name: "a!kayıt",
    execute(message, args){
       
          // Action
          let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));

          if (UserJSON[message.author.id]) {
              message.channel.send("**eee amk sen zaten kayıtlısın!!**:deer:");
              return;
          }

          UserJSON[message.author.id] = {
              para: 500,
              Karabüyükağıtları: 0, 
              taksiplakası: 0, 
              UŞarap1: 0, //1
              Ubarbi: 0, //10
              Uçikolata: 0, //11
              Upepesi: 0, //12
              Uturkkahvaltisi: 0, //13
              Ucips: 0, //14
              Uekmek: 0, //15
              Umoco: 0, //16
              Ukan: 0, //17
              Ubilgisayar: 0, //18
              Ufantezimalzemesi: 0, //19
              Uekler: 0, //20
              Udkklasikyağmasaji: 0, //22
              UMOMGANGYAZILIBİLEKLİK: 0, //23
              lastclaim: 0,
              lastwork: 0,
              workers: 0,
              Lexy: 0,
          }

          let mentioned = message.mentions.members.first();
          Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
          message.react('💗')
          message.channel.send("*Tebrikler* **A101** *de kayıtlısınız başlangıç parası olarak* **500 a101 birim**💗");
          return;
      }
    };