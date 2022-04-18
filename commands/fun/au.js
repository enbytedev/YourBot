const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

const stat = [
"one of the imposters",
"just another dead crewmate",
"a fellow crewmate",
]

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'au',
			group: 'fun',
			description: 'Who is Among Us? | `.au @user`',
			memberName: 'au',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: [],
		});
	}

	run(message) {
	const taggedUser = message.mentions.users.first();
	if (!message.mentions.users.size) {
		return message.reply('You need to tag a user in order to test them!');
		message.delete()
	}
		
		const attachment = new Discord
	.MessageAttachment('./assets/second/au.png', 'au.png');
		const au = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('The Among Us Test')
	.setDescription(`${taggedUser.username} is ${stat[Math.floor(Math.random() * stat.length)]}!`)
	.attachFiles(attachment)
	.setThumbnail('attachment://au.png');

			message.delete()
		message.channel.send(au);
}};