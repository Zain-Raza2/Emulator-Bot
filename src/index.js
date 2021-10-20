const { Client, Collection } = require('discord.js')
require('dotenv').config()

// Client

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
    ],
})

module.exports = client

// Global Variables 

client.commands = new Collection()
client.slashCommands = new Collection()
client.config = require("../config.json")

// Initialization

require("./handler")(client)

client.login(process.env.DISCORD_TOKEN)