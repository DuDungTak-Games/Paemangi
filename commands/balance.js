const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('잔고를 확인할 수 있습니다'),
	async execute(interaction, args) {
        const target = interaction.user;
		await interaction.reply(`${target.tag} 님의 잔고: ${args.getBalance(target.id)}💰`);
	},
};