const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')

//=============================================
client.on('ready', () =>{
    console.log('Chiriri is online!')

    command(client, ['ping', 'test'], message =>{
        message.channel.send('Pong!')
    })

    command(client, 'servers', message =>{
        client.guilds.cache.forEach(guild =>{
            console.log(guild)
        })
    })
})
//=============================================



//=============================================
client.login(process.env.DJS_TOKEN)
