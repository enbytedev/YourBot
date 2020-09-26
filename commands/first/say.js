const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			group: 'first',
			description: 'Echo a message. | `.say <Message to repeat>`',
			memberName: 'say',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		 message.delete()
		 message.channel.send(message.content.split(" ").slice(1).join(" "));
	}
};