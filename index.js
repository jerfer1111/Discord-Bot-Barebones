require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require ('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) =>{
    console.groupCollapsed(`${c.user.tag} is now online!`)
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('Hi there!');
    }
    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
            .setTitle('Embed Title')
            .setDescription('This is an embed description');
        
        interaction.reply({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);