const client = require("../index")

client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
        await interaction.defer({ephemeral: true}).catch(() => {})

        const command = client.slashCommands.get(interaction.commandName)
        if (command) {
            const args = []

            interaction.options.array().map((x) => {
                args.push(x.val)
            })

            command.run(client, interaction, args)
        } else {
            return interaction.followUp({content: "An error has occured"})
        }
    }
})