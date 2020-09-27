const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');
const {hook_url} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'h.pdp',
			group: 'third',
			description: 'PewDiePie. | `.h.pdp <Message to repeat>`',
			memberName: 'h.pdp',
			clientPermissions: ['MANAGE_WEBHOOKS', 'SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		message.delete()
		
		const { Webhook } = require('discord-webhook-node');
		const hook = new Webhook(`${hook_url}`);
		 
		const IMAGE_URL = 'https://i.imgur.com/Q9va3Sl.jpg';
		hook.setUsername('PewDiePie');
		hook.setAvatar(IMAGE_URL);
		 
		hook.send(message.content.split(" ").slice(1).join(" "));
		}};