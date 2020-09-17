const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

const stat = [
"one of the imposters",
"just another dead crewmate",
"a fellow crewmate",
]

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'au',
			group: 'second',
			description: 'Who is Among Us?',
			memberName: 'au',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: [],
		});
	}

	run(message) {
	const taggedUser = message.mentions.users.first();
	if (!message.mentions.users.size) {
		return message.reply('You need to tag a user in order to test them!');
		message.delete()
	}
	
		const imposter = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('The Among Us Test')
			.setDescription(`${taggedUser.username} is ${stat[Math.floor(Math.random() * stat.length)]}!`)
			.setThumbnail('https://i.imgur.com/Bb4SxSu.png')
			.setTimestamp()
			.setFooter('Inspired by Among Us');
		message.delete()
		message.channel.send(imposter);
}};