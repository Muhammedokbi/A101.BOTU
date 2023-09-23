const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "a!ping",
    execute(message, args){
        const discordPing = message.client.ws.ping;
        message.channel.send("ping hesaplanıyor....").then(msg =>{
            const ping = msg.createdTimestamp - message.createdTimestamp;
            const Embedping = new MessageEmbed()
            .addField(`discord gecikmesi:`,`${discordPing} ms`)
            .addField(`bot gecikmesi:`,`${ping} msg`)
            msg.edit(Embedping);
        })
    }
}
