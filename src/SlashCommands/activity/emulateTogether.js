import { CommandInteraction, Client} from 'discord.js'
import {} from 'discord-together'

module.exports = {
    name: "together", 
    descripton: "Start emulation session",
    options : [
        {
            name: "channel",
            description: "channel you want to start session in" ,
            type: "CHANNEL",
        },
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */

    run: async(client, interaction, args) => {
        const [ channelID ] = args
        const channel = interaction.guild.channels.cache.get(channelID)

        if (channel.type == 'GUILD_VOICE') {
            discordTogether
                .createTogetherCode(channelID, "emulate")
                .then((x) => interaction.reply(x.code))
        } else {
            return interaction.followUp({
                content: "Please choose a voice channel",
            })
        }
    }
}