const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'a0',
			group: 'first',
			description: 'Announce an update.',
			memberName: 'update',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Update`)
		.setDescription("Please read for exciting news!")
		.setColor(57099)
		.addField(message.member.user.tag+' on behalf of the team:', message.content.split(" ").slice(1).join(" "))
	.setFooter(`Signed, your ${server_name} team`, `${branding}`);
		message.delete()
		message.channel.send(say);
	}
};