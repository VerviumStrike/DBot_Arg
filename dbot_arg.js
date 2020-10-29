//Variables
const Discord = require("discord.js")
const Client = new Discord.Client()

//Main
Client.on("ready", ()=>{
console.log(`==========================
    Bot Status: Online
==========================`)
})

Client.on("message", message=>{
    var args = message.content.split(" ")
    var arg1 = args[1]
    if(arg1 == null || arg1 == ""){}else{
        console.log(arg1)
    }
})

Client.login("Your discord token here")