const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');
const { MessageEmbed } = require("discord.js");

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'error',
			group: 'second',
			description: 'Tell someone they need a stacktrace if they want help.',
			memberName: 'error',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
const attachment = new Discord
	.MessageAttachment('./assets/second/error.jpg', 'error.jpg');
const emb = new Discord.MessageEmbed()
	.setColor('57099')
	.setTitle('Here ye, here ye!')
	.setDescription(`The ${server_name} support team has identified the issue! PEBCAK!`)
	.attachFiles(attachment)
	.setImage('attachment://error.jpg');
	message.delete()
	message.channel.send(emb);
		
	}
};