const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'clear',
			group: 'first',
			description: 'Clear messages.',
			memberName: 'clear',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message, args) {
		let fail = new Discord.MessageEmbed() //embed
	.setTitle("Error Clearing Messages")
	.setDescription("Please check your syntax usage and reference the help command.")
	.setColor(9895936)
	
		let success = new Discord.MessageEmbed() //embed
	.setTitle("Successfully Cleared Messages")
	.setDescription("Deleted the specified amount of messages in this channel!")
	.setColor(57099)
	message.delete()
if (isNaN(args[0])) return message.channel.send(fail).then( msg => msg.delete({ timeout: 3000}));
if (args[0] > 100) return message.channel.send(fail).then( msg => msg.delete({ timeout: 3000}));
	message.channel.bulkDelete(args[0])
		.then( messages => message.channel.send(success).then( msg => msg.delete({ timeout: 3000})));
	}
};