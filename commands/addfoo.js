const { SlashCommandBuilder } = require('@discordjs/builders');
const Foo = require('../data/config.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addfoo')
		.setDescription('MongoDB에 새로운 Foo 객체를 추가합니다')
        .addStringOption(option=>
            option.setName('name')
                .setDescription('추가될 Foo 객체의 이름을 정의합니다')
                .setRequired(true)),
	async execute(interaction) {
        let name = interaction.options.getString('name');
        let ins = new Foo({name: name,});
        await ins.save();
		await interaction.reply('객체 추가됨');
	},
};