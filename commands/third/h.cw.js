const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');
const {hook_url} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'h.cw',
			group: 'third',
			description: 'ConnorWake control? Yes.',
			memberName: 'h.cw',
			clientPermissions: [],
			userPermissions: [],
		    ownerOnly: true,
		});
	}

	run(message) {
		message.delete()
		
		const { Webhook } = require('discord-webhook-node');
		const hook = new Webhook(`${hook_url}`);
		 
		const IMAGE_URL = 'https://i.imgur.com/6hs5UqU.png';
		hook.setUsername('ConnorWake');
		hook.setAvatar(IMAGE_URL);
		 
		hook.send(message.content.split(" ").slice(1).join(" "));
		}};