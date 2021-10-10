const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gamble')
		.setDescription('도박 명령어입니다!')
        .addIntegerOption(option => 
            option.setName('money')
                .setDescription('배팅할 금액을 입력해주세요!')
                .setRequired(true)),
	async execute(interaction) {
        let user = interaction.user;
        let money = interaction.options.getInteger('money');
        console.log(`${user}님의 gamble 요청`);
        await interaction.reply(`${user} 배팅한 금액 : ${money}`);
	},
};