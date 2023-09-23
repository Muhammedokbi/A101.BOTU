const discord = require('discord.js');
const pagination = require('discord.js-pagination');
const { Client } = require('undici');

module.exports = {
    name: 'a!nevar',
    execute(message, args){
        const pagel3 = new discord.MessageEmbed()
        .setFooter('A101_', message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription("*A101 boş bir şey satın alma yerine hoş geldiniz* \n ***-satın almak için prefix + ID*** \n ***-Örnek~ a!id-5*** \n**════════════════════════════** \n **`2`** <:yirtiz:1035662417205657660> *`Fantezi malzemesi`* `-------------------->` **1K** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117> \n **`1`** <:yirtiz:1035662417205657660> *`Bilgisayar`* `--------------------------->` **5K** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`3`** <:yirtiz:1035662417205657660> *`Kahve makinesi`* `----------------------->` **500** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`4`** <:yirtiz:1035662417205657660> *`45 dk klasik yağ masaji`*`--------------->` **500** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`5`** <:yirtiz:1035662417205657660> *`MOM GANG YAZILI BILEKLIK`*`-------------->` **525**  <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`6`** <:yirtiz:1035662417205657660> *`Turk kahvaltisi`*`----------------------->` **250** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>")
        const pagel2 = new discord.MessageEmbed()
        .setFooter('A101_', message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription("*A101 boş bir şey satın alma yerine hoş geldiniz* \n ***-satın almak için prefix + ID*** \n ***-Örnek~ a!id-5*** \n**════════════════════════════** \n **`7`** <:yirtiz:1035662417205657660> *`ekler`*`---------------------------->` **250**  <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>,\n**`!!`**<:cat_stare:1040991545479930006>*`Lexy`*`----------------------------->` **!!** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>")
        const pagel1 = new discord.MessageEmbed()
        .setFooter('A101_', message.author.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
        .setDescription(" *A101 boş bir şey satın alma yerine hoş geldiniz* \n ***-satın almak için prefix + ID*** \n ***-Örnek~ a!id-5*** \n**════════════════════════════** \n **`15`** <:yirtiz:1035662417205657660> *`Kan`*`----------------------->` **250** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`23`** <:yirtiz:1035662417205657660> *`barbi`*`--------------------->` **250**  <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`20`** <:yirtiz:1035662417205657660> *`Ekmek`*`--------------------->` **250**  <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`!!`**<:cat_stare:1040991545479930006>*`moco`*`----------------------->` **!!** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`18`** <:yirtiz:1035662417205657660> *`Sarap`*`--------------------->` **500** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`17`** <:yirtiz:1035662417205657660> *`Cips`*`---------------------->` **250** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>\n**`16`** <:yirtiz:1035662417205657660> *`Pepsi`*`--------------------->` **250** <:420402E2FF9D44D6B25CD13E4E9AA111:1045956514667565117>")
        const pages = [
            pagel1,
            pagel2,
            pagel3
        ]
    
        const emoji = ["⏪","⏩"]
    
        //const timeout = '1'
    
        pagination(message, pages, emoji, /*timeout*/)
    
    }
}