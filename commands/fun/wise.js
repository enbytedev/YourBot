const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');
const request = require("request");

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'wise',
			group: 'fun',
			description: 'Get an Inspirobot Quote. | `.wise`',
			memberName: 'wise',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: [],
		});
	}

	run(message) {
		request('http://inspirobot.me/api?generate=true', function (error, response, body) {
				message.channel.send({
					embed: {
						color: 57099,
						description: `**I have here a motivational quote for you!** *${server_name} does not endorse the contents of this computer-generated quote!*`,
						image: {
							url: body
						}
				}
		})})
		message.delete()
	}
};