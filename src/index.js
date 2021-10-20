const { Client, Collection, PermissionOverwrites } = require('discord.js')
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
client.config = require("../config.json")
client.slashCommands = new Collection()

// Initialization

require("./handler")(client)

client.login(process.env.TOKEN)