
const Discord = require('discord.js');
const client = new Discord.Client();
const { Routes, Collection } = require("discord.js");

require('discord-buttons')(client);

const işaret = require('./işaret.json')
const { readdirSync } = require('fs');

const { join } = require('path');

const Fs = require("fs");
const path = require('path');
const { REST } = require("@discordjs/rest");


client.commands = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}
const commandFilesevents = readdirSync(join(__dirname, "events")).filter(file => file.endsWith(".js"));

for (const file of commandFilesevents) {
  const command = require(join(__dirname, "events", `${file}`));
  client.commands.set(command.name, command);
}
client.satınal = new Discord.Collection();

const commandFiles2 = readdirSync(join(__dirname, "satın-al")).filter(file => file.endsWith(".js"));

for (const file of commandFiles2) {
  const command2 = require(join(__dirname, "satın-al", `${file}`));
  client.commands.set(command2.name, command2);
}
client.çaliş = new Discord.Collection();

//const playerJoinLeave = require('./utils/Giriş-Çıkış');
const playerJoinLeave1 = require('./utils/memberCount');

//economy
client.on("message", async (message) => {
  if (message.content.startsWith(prefix)) {
      var args = message.content.substr(prefix.length)
          .toLowerCase()
          .split(" ");

          if (args[0] == "ver") {

            let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
            let Money = args[1];

            if (!Money) {
                message.channel.send("**Ne kadar vereceğin**<:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>*onu yazsaydın bari..*");
                return;
            }

            if (!UserJSON[message.author.id]) {
                message.channel.send("a!Kayıt yap amk.. <:IMG_1748:1045955824855560283>");
                return;
            }
            if (isNaN(Money)) {
                message.channel.send("**Etiketten önce sayıyı giriniz.. <:IMG_1745:1045955881336066139>**");
                return;
            }
            if (UserJSON[message.author.id].para < Money) {
                message.channel.send("Paran yok oğlum <:IMG_1747:1045955857944432720>**a!iş**<:IMG_1747:1045955857944432720> e Bak bari..");
                return;
            }
            if (Money.indexOf(".") != -1 || Money.indexOf("-") != -1 || Money == 0) {
                message.channel.send("Sıfırdan yüksek bir şey Gir lan");
                return;
            }

            let Mentioned = message.mentions.members.first();
            if (!Mentioned) {
                message.channel.send("Oğlum kime vereceksen **etiket** bas");
                return;
            }
            if (!UserJSON[Mentioned.id]) {
                message.channel.send("Çok ayıp etiketlediğin kişi **a!kayıt** yapmamış söyle de **a!kayıt** yapsın");
                return;
            }

            UserJSON[message.author.id].para -= parseInt(Money);
            UserJSON[Mentioned.id].para += parseInt(Money);

            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

            message.channel.send("Helal be şu kadar para verdin" + Money + Mentioned.user.username);
        }



if (args[0] == "sıralama") {
  let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
  var Sorted = Object.entries(UserJSON).sort((a, b) => b[1].para - a[1].para);
  if (Sorted.length > 10) Sorted = Sorted.slice(0, 10);

  var LBString = "";
  Sorted.forEach(user => {
      LBString += `<a:exclamation:1040926139478179890>${client.users.cache.find(u => u.id == user[0])}<:___:1040910657723306084>  - ${user[1].para}\n`;
  });
  message.channel.send(`${LBString}`);
}

   }
});
//economy
var prefix = işaret.prefix
client.on('message',(message)=>{
  const args = message.content.slice().trim().split()
  const command = args.shift().toLocaleLowerCase();

  if(!client.commands.get(command)) return;

  try{
    client.commands.get(command).execute(message, args);
  }
  catch(e){
    console.error(e);
  }

})

client.on('ready', () => {
 
  console.log(`bot artık aktif!🥰`);
  //client.channels.cache.get('channels id').join();

  const durumler = [
    "a!help",
    "⚠️","📜","🪺","🫠",
    `${client.guilds.cache.size} sunucudayım<3`
  ]
  
  client.user.setStatus('idle')

  setInterval(function (){
    let durum = durumler[Math.floor(Math.random()*durumler.length)]
     client.user.setActivity(durum)
  }, 10000);

  //utils
  //playerJoinLeave(client, Discord);
  playerJoinLeave1(client, Discord);
   })
     /* client.on('message', msg => {
        if (msg.content === 'a!vote') {
        msg.channel.send(` ->| *Oy verip de beni mutlu etmek istiyorsan*\n\n->| *Amk hiçbir şey yapmayacağım zaten girip ^vote Bascan*\n\n->| **https://top.gg/bot/1010514804114477117** \n ||<@${msg.author.id}>||`)
        }
        });*/
client.login(işaret.token);

client.on('message', message => {

if (message.content.startsWith('L!yanaktan öp')) {
  let targetMember = message.mentions.members.first();
  if(!targetMember) return message.reply('Kimi yanaktan öpcin belli etmeniz gerekir!!');
  let repliese1 = ["https://media.tenor.com/LnRkpWBdsOUAAAAC/cute-couple.gif","https://media.tenor.com/ILMv_6weVkcAAAAd/cheek-kiss-kiss.gif","https://media.tenor.com/etSTc3aWspcAAAAd/yuri-kiss.gif","https://media.tenor.com/9rN8nw7pVcEAAAAd/anime-kiss.gif","https://media.tenor.com/_vI2MlAN-EUAAAAd/anime-couple-kiss-cheek.gif","https://media.tenor.com/VtVjnILZuuYAAAAd/azusa-aizawa-falfa-aizawa.gif","https://media.tenor.com/Yb6fl8asAhgAAAAd/anime-couple.gif","https://media.tenor.com/6Wd5IsZn8EwAAAAd/anime-kiss.gif","https://media.tenor.com/pTqtkKHCMzAAAAAd/mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai.gif","https://media.tenor.com/6mvKb4vf0SoAAAAd/wholesome-nom-nom-nom-nom.gif","https://media.tenor.com/b_m1PsJ7XCUAAAAd/cute-smile.gif","https://media.tenor.com/x_bLa0Y8qdoAAAAM/aww-kiss.gif","https://img1.ak.crunchyroll.com/i/spire3/d531793229a32f666b9cc1a8dfd874721413091103_full.gif","https://i.kym-cdn.com/photos/images/original/001/079/061/8dd.gif","https://i.pinimg.com/originals/a1/ef/44/a1ef449ac6fedac8071b97b57617e6b3.gif","https://cdn.lowgif.com/full/1ade47ba222384e3-.gif"]
  let resulte1 = Math.floor((Math.random() * repliese1.length));
  
  const embedL = new Discord.MessageEmbed()
  .setAuthor(`seni yanaktan öptü ${targetMember.user.username} 🥰 `,message.author.displayAvatarURL({dynamic: true}))
  .setImage(repliese1[resulte1])
  .setColor('RANDOM')
  message.channel.send(embedL);
}
if (message.content.startsWith('ne')) {
  message.reply(`\n> ne`);
}
if (message.content.startsWith('NE')) {
  message.reply(`\n> neee`);
}
if (message.content.startsWith('nasıl')) {
  message.reply(`\n> ne nasıl yarrama asıl`);
}
  if (message.content.startsWith('test')) {
    message.delete();
    message.channel.send(`> *Sevgililer gününüz kutlu olsun yoksa da ben sizi seviyorum 😘* \n ***Herkese duyurulur***`);
    message.channel.send(`https://media.tenor.com/I77M4aWAGk8AAAAM/hug.gif`);
}
if (message.content.startsWith('L!sik')) {
  let targetMember = message.mentions.members.first();
  if(!targetMember) return message.reply('Kimi sikti belli etmeniz gerekir!!');
  let repliese1 = [""]
  let resulte1 = Math.floor((Math.random() * repliese1.length));
  
  const embedL = new Discord.MessageEmbed()
  .setAuthor(`seni sikti ${targetMember.user.username} 😱 `,message.author.displayAvatarURL({dynamic: true}))
  .setImage(repliese1[resulte1])
  .setColor('RANDOM')
  message.channel.send(embedL);
}


if (message.content.startsWith('L!öp')) {
  let targetMember = message.mentions.members.first();
  if(!targetMember) return message.reply('Kimi Öpceğinizi belli etmeniz gerekir!!');
  let repliese1 = ["https://media.tenor.com/P64naKtG2xMAAAAM/my-little-monster-anime.gif","https://media.tenor.com/7T1cuiOtJvQAAAAS/anime-kiss.gif","https://media.tenor.com/8V-2mCzxzn0AAAAS/anime-kiss-romance.gif","https://media.tenor.com/tJiq6XLJccIAAAAM/kiss-couple.gif","https://media.tenor.com/2u67zOB43esAAAAM/cute-anime.gif","https://media.tenor.com/vhuon7swiOYAAAAM/rakudai-kishi-kiss.gif","https://media.tenor.com/aQgYK-ufK7QAAAAM/shirayuki-akagami-no-shirayukihime.gif","https://media.tenor.com/ffvFDpgRJZUAAAAM/cute-cute-kiss.gif","https://media.tenor.com/4wUL9KIdlJAAAAAd/kiss.gif","https://media.tenor.com/Bw0OLA1NefUAAAAM/anime-chuunibyou.gif","https://media.tenor.com/Q-RjY3zuBcsAAAAd/anime-kiss.gif","https://media.tenor.com/J7eGDvGeP9IAAAAC/enage-kiss-anime-hug.gif","https://media.tenor.com/OjcDtiEDUvMAAAAM/friendly-kiss.gif","https://media.tenor.com/vtOmnXkckscAAAAM/kiss.gif","https://media.tenor.com/-tntwZEqVX4AAAAM/anime-kiss.gif","https://media.tenor.com/mNPxG38pPV0AAAAM/kiss-love.gif","https://media.tenor.com/KE3VW3qP4RAAAAAM/kiss.gif","https://media.tenor.com/el8DHxNp9IsAAAAM/kiss-anime-love.gif","https://media.tenor.com/9jB6M6aoW0AAAAAC/val-ally-kiss.gif"]
  let resulte1 = Math.floor((Math.random() * repliese1.length));
  
  const embedL = new Discord.MessageEmbed()
  .setAuthor(`seni Öp ${targetMember.user.username} 🥰 `,message.author.displayAvatarURL({dynamic: true}))
  .setImage(repliese1[resulte1])
  .setColor('RANDOM')
  message.channel.send(embedL);
}
if (message.content.startsWith('L!sarıl')) {
  let targetMember = message.mentions.members.first();
  if(!targetMember) return message.reply('Kimi sarılcağınızı belli etmeniz gerekir!!');

  let repliese1 = ["https://media.tenor.com/C7nY0yyhwIIAAAAC/anime.gif","https://media.tenor.com/7oCaSR-q1kkAAAAM/alice-vt.gif","https://media.tenor.com/RWD2XL_CxdcAAAAd/hug.gif","https://media.tenor.com/oSPZDjEf9vQAAAAC/anime-hug-anime-hugging.gif","https://media.tenor.com/I77M4aWAGk8AAAAM/hug.gif","https://media.tenor.com/WLm2bTIGi94AAAAC/hugs-spinning.gif","https://media.tenor.com/3mr1aHrTXSsAAAAM/hug-anime.gif","https://media.tenor.com/PzIA_wdL3zgAAAAM/wlw-hug.gif","https://media.tenor.com/8NnSbNaqB_0AAAAM/anime-hug.gif","https://media.tenor.com/vp-9EqYmYGsAAAAM/anime-zertwo.gif","https://media.tenor.com/jQ0FcfbsXqIAAAAM/hug-anime.gif","https://media.tenor.com/84vXUVCdL4AAAAAM/anime-couple-anime-winter.gif","https://media.tenor.com/IPutLryl0jQAAAAM/sweet-hug.gif","https://media.tenor.com/YFEpJqQBCWAAAAAM/ouran-high-school-host-club-anime.gif","https://media.tenor.com/6PFiX0nf_g8AAAAC/kyoukai-no-kanata.gif","https://media.tenor.com/SY2ztLfHaJEAAAAC/anime-cuddle.gif","https://media.tenor.com/VEvssFhcqDgAAAAM/sword-art-online-hug.gif","https://media.tenor.com/X9z9glsxRwoAAAAC/anime-cuddle.gif",]
  let resulte1 = Math.floor((Math.random() * repliese1.length));

  const embedL = new Discord.MessageEmbed()
  .setAuthor(`sana sarıldı ${targetMember.user.username} Çok sıkma❤️ `,message.author.displayAvatarURL({dynamic: true}))
  .setImage(repliese1[resulte1])
  .setColor('RANDOM')
  message.channel.send(embedL);
}
if (message.content.startsWith('L!tokatla')) {
  let targetMember = message.mentions.members.first();
  if(!targetMember) return message.reply('*Kimi* **tokat** *belli etmeniz gerekir*!!');

  let repliese1 = ["https://media.tenor.com/PeJyQRCSHHkAAAAM/saki-saki-mukai-naoya.gif","https://media.tenor.com/uTT2gXruNtkAAAAM/oreimo-anime.gif","https://media.tenor.com/XiYuU9h44-AAAAAM/anime-slap-mad.gif","https://media.tenor.com/oYsWol5_exYAAAAM/slap.gif","https://media.tenor.com/RbSS2HM-97oAAAAM/slap.gif","https://media.tenor.com/CAesvxP0KyEAAAAM/shinobu-kocho-giyuu-tomioka.gif","https://media.tenor.com/aOiJzO_msycAAAAM/horimiya-slap.gif","https://media.tenor.com/iDdGxlZZfGoAAAAM/powerful-head-slap.gif","https://media.tenor.com/rVXByOZKidMAAAAM/anime-slap.gif","https://media.tenor.com/bHE5Txlp5-8AAAAM/slap-butts-anime.gif","https://media.tenor.com/nBaCVW8855oAAAAM/anime-slap.gif","https://media.tenor.com/HU77IYpBaKkAAAAM/dendritic-cell-anime-slap.gif","https://media.tenor.com/0RUsQuQb0FAAAAAM/money-anime.gif","https://media.tenor.com/1lemb3ZmGf8AAAAM/anime-slap.gif","https://media.tenor.com/ucXo0Afzr7YAAAAM/overlord-narberal-gamma.gif","https://media.tenor.com/6P0mB-dHGKQAAAAM/sayu-ogiwara.gif","https://media.tenor.com/bpOL_hsXRnEAAAAM/kon-kon-mio.gif","https://media.tenor.com/Id_FJHZWMDkAAAAC/slap-angry.gif","https://media.tenor.com/743sV2IWMEAAAAAC/chuunibyou-demo-koi-ga-shitai-anime.gif","https://media.tenor.com/L9G4n6PZUNMAAAAM/cute-demon-cutie.gif","https://media.tenor.com/LAjy4LpVmlwAAAAM/hotd.gif","https://media.tenor.com/hxDsw4YhwJwAAAAM/kaiyari-redo-of-healer.gif"]
  let resulte1 = Math.floor((Math.random() * repliese1.length));

  const embedL = new Discord.MessageEmbed()
  .setAuthor(`sana tokat atdi ${targetMember.user.username} niyee 😬 `,message.author.displayAvatarURL({dynamic: true}))
  .setImage(repliese1[resulte1])
  .setColor('RANDOM')
  message.channel.send(embedL);
}
});
const { createCanvas, loadImage, registerFont } = require('canvas');

const TOKEN = 'MTAxMDUxNDgwNDExNDQ3NzExNw.GgeYqO.eSURGRK7Wmn6pToNZl_MxhuMrNxlyWiBtzO80Q'; // Discord Developer Portal'dan aldığınız bot token'ını buraya ekleyin
const FONT_SIZE = 20; // Yazı boyutunu burada ayarlayabilirsiniz
const FONT_PATH = "./samson.ttf"; // Kullanmak istediğiniz fontun dosya yolunu buraya ekleyin
const BACKGROUND_IMAGE_PATH = './temp.png'; // Arkaplan fotoğrafının dosya yolunu buraya ekleyin



registerFont(FONT_PATH, { family: 'Font Adı' }); // Font adını buraya ekleyin

client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('a!pro')) {
    const text = message.content.substring(9); // !yazfoto komutundan sonraki metni alır

      // Kullanıcının profil fotoğrafını yükle
      const user = message.author;
      const profileImage = await loadImage(user.avatarURL({ format: 'png' }));
          // Arkaplan fotoğrafını yükle
          const backgroundImage = await loadImage(BACKGROUND_IMAGE_PATH);
      // Yeni bir canvas oluştur ve profil fotoğrafı boyutunda ayarla
      const canvas = createCanvas(backgroundImage.width, backgroundImage.height);
      const context = canvas.getContext('2d');
    // Arkaplan fotoğrafını çiz
    context.drawImage(backgroundImage, 0, 0);

// Profil fotoğrafını çiz
context.drawImage(profileImage, 0, 0);

    // Yazı rengi, yazı tipi ve yazı boyutunu ayarla
    context.fillStyle = '#FFFFFF';
    context.font = `${FONT_SIZE}px 'Font Adı'`;
 // Yazıyı merkeze yerleştir
 const textWidth = context.measureText(text).width;
 const textX = (canvas.width - textWidth) / 2;
 const textY = profileImage.height + FONT_SIZE + 10;

   /* // Yazıyı çiz
    context.fillText(text, textX, textY);

     // Kullanıcının ismini yaz
     const nameText = user.username;
     const nameTextWidth = context.measureText(nameText).width;
 
     // İsmi sağa hizala
     context.textAlign = 'right';
 
     const nameTextX = canvas.width - 378;
     const nameTextY = profileImage.height + FONT_SIZE - 12;
 
     context.fillText(nameText, nameTextX, nameTextY);*/

     
 

    // Canvası bir resme dönüştür
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'temp.png');

    // Resmi sunucuya gönder
    const channel = message.channel;
    await channel.send(attachment);
  }
  client.on('message', message => {
    if (message.content.startsWith('!yaziturapara')) {
      const args = message.content.slice('!yaziturapara'.length).trim().split(' ');
      if (args.length !== 2) {
        message.channel.send('Lütfen komutu doğru formatta girin. Örneğin: !yaziturapara yazı 50');
        return;
      }
  
      const userGuess = args[0].toLowerCase();
      const amount = parseFloat(args[1]);
  
      if (isNaN(amount) || amount <= 0) {
        message.channel.send('Lütfen geçerli bir para miktarı girin.');
        return;
      }
  
      // Kullanıcının ID'sini alıyoruz.
      const userID = message.mentions.users.first().id;
  
      // Kullanıcının daha önceki para bilgisini alıyoruz. Eğer daha önce kayıt yoksa, başlangıç değeri olarak 0 atanır.
      const userMoney = UserJSON[userID] ? UserJSON[userID].para : 0;
  
      // Rastgele sayı üreterek yazı tura sonucu belirleyelim.
      const result = Math.random() < 0.5 ? 'yazı' : 'tura';
  
      // Sonucu mesaj olarak gönderelim.
      message.channel.send(`Sonuç: **${result}**`);
  
      // Kullanıcının tahminini kontrol edelim ve sonuca göre mesaj gönderelim.
      if (userGuess === result) {
        const totalAmount = userMoney + amount * 2;
        message.channel.send(`Tebrikler, kazandınız! Tahmininiz doğru ve paranız ${totalAmount} TL oldu.`);
        // Kazandığı parayı kullanıcı nesnesinde güncelliyoruz.
        UserJSON[userID] = { para: totalAmount };
      } else {
        message.channel.send('Üzgünüm, kaybettiniz. Tahmininiz yanlış.');
      }
    }
  });
  
});
