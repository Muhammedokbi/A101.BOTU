const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "a!iş",
    execute(message, args){
        const kanala = new MessageEmbed()
        .setTitle("iş alm")
        .addField("**1.iş** *Ada gibi Karabüyü yapmak*","//a!iş1")
        .addField("**2.iş** *Hırsız olarak çalışmak*","//a!iş2")
        .addField("**3.iş** *Şarap dükkanında çalışmak*","//a!iş3")
        .addField("**4.iş** *Markette çalışmak","//a!iş4*")
        .addField("**5.iş** *Lina gibi rp sunucusu açmak*","//a!iş5")
        .setColor("RANDOM")
        message.reply({embed: kanala});
              
    }
}