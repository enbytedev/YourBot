const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'setup.hooks',
			group: 'third',
			description: 'Setup webhooks. | `.setup.hooks`',
			memberName: 'setup.hooks',
			clientPermissions: ['MANAGE_WEBHOOKS', 'SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: [],
		    ownerOnly: true,
		});
	}

	run(message) {
		message.delete()
		message.channel.createWebhook('Initial Webhook', {
			avatar: 'https://i.imgur.com/Q9va3Sl.jpg',
		}).then(webhook => console.log(`Created webhook ${webhook}`)).catch(console.error);
}};