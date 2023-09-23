const discord = require('discord.js');

module.exports = {
    name: "a!yardım",
    execute(message, args){

      const kanal0 = new discord.MessageEmbed()
      .setColor('2b383d')
      .setTitle('🎼tıkla🍁')
      .setURL('https://www.youtube.com/watch?v=iggmiF7DNoM')
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .addFields(
          { name: '    -**A101_🛒**', value: '<:A101_:1031263124726218823> hey ❤️' },
        //  { name: '\u200B', value: '\u200B' },
          { name: '`kayıt📂`', value: 'Ekonomi sisteminden faydalanmak için kendinizi  **a!kayıt**', inline: true },
          { name: '`ver📤`', value: 'Arkadaşınıza para vermek için a!ver', inline: true },
          { name: '`para💳`', value: 'Bakiyenizi kontrol etmek için **a!para**', inline: true },
          { name: '`çaliş🍩`', value: '5 tane iş var bak **a!iş** ve bir şey satın-al', inline: true },
          { name: '`sıralama🕵️‍♀️`', value: 'Kaçıncı sırada olduğunuza bakmak için **a!sıralama**', inline: true },
          { name: '`marketler🛒`', value: '**a!nevar** de ki ürünleri satın alabilirsiniz', inline: true },
          { name: '`çanta🧰`', value: 'Çantadaki ürünleri görmek için **a!çanta**', inline: true },
      )
      .setTimestamp()
      .setFooter('A101_', 'https://cdn.discordapp.com/attachments/1020957857820180557/1031196260453064704/A101-square-logo.png' );
  message.reply({embed: kanal0})
        
    }
}