const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'first',
			description: 'Speak a message.',
			memberName: 'say',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		 message.delete()
		 message.channel.send(message.content.split(" ").slice(1).join(" "));
	}
};