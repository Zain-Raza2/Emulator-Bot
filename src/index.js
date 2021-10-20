const { Client, Collection } = require('discord.js')

// Client

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
    ]
})

module.exports = client

// Global Variables 

client.commands = new Collection()
client.config = require("../config.json")
client.slashCommands = new Collection()

// Initialion

require("./handler")(client)

client.login(client.config.token)