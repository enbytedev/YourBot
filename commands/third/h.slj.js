const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');
const {hook_url} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'h.slj',
			group: 'third',
			description: 'Samuel L Jackson control? Yes.',
			memberName: 'h.slj',
			clientPermissions: [],
			userPermissions: ['ADMINISTRATOR'],
		    ownerOnly: true,
		});
	}

	run(message) {
		message.delete()
		
		const { Webhook } = require('discord-webhook-node');
		const hook = new Webhook(`${hook_url}`);
		 
		const IMAGE_URL = 'https://i.imgur.com/r6AlKOF.jpg';
		hook.setUsername('Samuel L Jackson');
		hook.setAvatar(IMAGE_URL);
		 
		hook.send(message.content.split(" ").slice(1).join(" "));
		}};