const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'a1',
			group: 'admin',
			description: 'Announcement. | `.a1 <Announcement Message>`',
			memberName: 'announce',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		const attachment = new Discord
		.MessageAttachment('./assets/icons/announcement.png', 'announcement.png')
		
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Announcement`)
	.setDescription(message.content.split(" ").slice(1).join(" "))
	.setColor(15300096)
	.attachFiles(attachment)
	.addField('\u200b', '\u200b')
	.addField(`This is an official announcement!`, `Please read this carefully, as it might affect you in some way.`)
	.setThumbnail('attachment://announcement.png')
	.setFooter(`Signed, ${message.member.user.tag} on behalf of the ${server_name} team.`, `${logo}`);
		message.delete()
		message.channel.send(say);
	}
};