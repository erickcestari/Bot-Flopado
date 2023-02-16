const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça uma playlist aí"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/40WQeQhDdwnlD7pwYDV2l6?si=7341667d584b458b")
    }
}