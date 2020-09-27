const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'a1',
			group: 'first',
			description: 'Announcement. | `.a1 <Announcement Message>`',
			memberName: 'announce',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Announcement`)
		.setDescription("Please read this carefully, as it might affect you in some way.")
		.setColor(15300096)
		.addField(message.member.user.tag+' on behalf of the team:', message.content.split(" ").slice(1).join(" "))
	.setFooter(`Signed, your ${server_name} team`, `${logo}`);
		message.delete()
		message.channel.send(say);
	}
};