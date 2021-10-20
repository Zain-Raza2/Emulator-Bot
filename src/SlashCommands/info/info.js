const { CommandInteraction, Client } = require("discord.js")

module.exports = {
    name: "info",
    description: "Gives basic information on how to use the bot",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        interaction.followUp({content: "No"})
    }
}