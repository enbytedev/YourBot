const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');
const {hook_url} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'h.rup',
			group: 'third',
			description: 'Rupert control? Yes.',
			memberName: 'h.rup',
			clientPermissions: [],
			userPermissions: ['ADMINISTRATOR'],
		    ownerOnly: true,
		});
	}

	run(message) {
		message.delete()
		
		const { Webhook } = require('discord-webhook-node');
		const hook = new Webhook(`${hook_url}`);
		 
		const IMAGE_URL = 'https://i.imgur.com/Qckjxcl.png';
		hook.setUsername('Rupert');
		hook.setAvatar(IMAGE_URL);
		 
		hook.send(message.content.split(" ").slice(1).join(" "));
		}};