const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'setup.hooks',
			group: 'first',
			description: 'Setup webhooks.',
			memberName: 'setup.hooks',
			clientPermissions: [],
			userPermissions: [],
		    ownerOnly: true,
		});
	}

	run(message) {
		message.delete()
		message.channel.createWebhook('PewDiePie', {
			avatar: 'https://i.imgur.com/Q9va3Sl.jpg',
		}).then(webhook => console.log(`Created webhook ${webhook}`)).catch(console.error);
}};