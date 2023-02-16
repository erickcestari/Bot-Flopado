
const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("random")
        .setDescription("Responde com algo aleatório'"),

    async execute(interaction){
        let textRock = "O mundo não é um mar de rosas; é um lugar sujo, um lugar cruel, que não quer saber o quanto você é durão. Vai botar você de joelhos e você vai ficar de joelhos para sempre se você deixar. Você, eu, ninguém vai bater tão forte como a vida, mas não se trata de bater forte. Se trata de quanto você aguenta apanhar e seguir em frente, o quanto você é capaz de aguentar e continuar tentando. É assim que se consegue vencer.Agora se você sabe do teu valor, então vá atrás do que você merece, mas tem que estar preparado para apanhar. E nada de apontar dedos, dizer que você não consegue por causa dele ou dela, ou de quem quer que seja. Só covardes fazem isso e você não é covarde, você é melhor que isso."
        arrayRock = textRock.split(' ')
        let random = [
            "bobinho", "trouxinha", "legal", "pretty", "docinho de coco",
            "ugly", "beatifull"
        ]
        arrayRock.forEach(element => {
            random.push(element)
        });
        random.push()
        await interaction.reply(`${interaction.user.username} is ${random[Math.floor(Math.random() * random.length)]}`)
        
    }
}