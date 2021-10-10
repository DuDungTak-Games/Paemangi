const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === '패망아춤춰') {
		await interaction.reply('둠칫둠칫');
	} else if (commandName === '울랄라') {
		await interaction.reply('울랄라~♬');
	}
});


client.login(token);