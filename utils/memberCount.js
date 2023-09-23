module.exports = client => {
    const channelId ='1064557890171568230'
   
    const updateMembers = guild => {
    const channel = guild.channels.cache.get(channelId)
    channel.setName(`Toplam kedi Sayısı:${guild.memberCount.toLocaleString()}`)
   }
   
    client.on('guilMemberAdd', (member) => updateMembers(memeber.guild))
    client.on('guilMemberRemove', (member) => updateMembers(memeber.guild))
   
    const guild = client.guilds.cache.get('1010934766733901964')
    updateMembers(guild)
}