const discord = require("discord.js")
module.exports = {
    name: "a!help",
    execute(message, args){
        const kanal0 = new discord.MessageEmbed()
        .setColor(0x0099FF)
        .setAuthor("komutların listesi!",message.author.displayAvatarURL({dynamic: true}))
        .setDescription('İşte komutların listesi! \n ama A101 nin özel komutları')
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .addFields(
            { name: ' 🎖Sıralamalar', value: '`a!sıralama`'},

            { name: '💰Economy', value: '`a!ver` `a!çanta` `a!iş` `a!nevar` `a!para` `a!yardım` `satın almak` `a!kumar`'},

            { name: '👌Hareketler', value: '``L!sarıl`` ``L!Öp`` ``L!tokatla`` ``L!yanaktan öp``' },

            { name: '🔧 ayarler', value: '`a!ping` `a!rakip-kim` `nokta nokta ...` `a!sunucu` '}, //`a!vote`
        )
        .setTimestamp()
    message.reply({embed: kanal0})
    }
}