const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'a2',
			group: 'first',
			description: 'Urgent announcement. | `.a1 <Urgent Announcement Message>`',
			memberName: 'urgent',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
	const attachment = new Discord
	.MessageAttachment('./assets/icons/u_announcement.png', 'u_announcement.png')
	
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Urgent Announcement`)
		.setDescription(message.content.split(" ").slice(1).join(" "))
		.setColor(9895936)
		.attachFiles(attachment)
		.addField('\u200b', '\u200b')
		.addField(`This is an official urgent announcement!`, `Please read this carefully in it's entirety, as it will likely affect you in some way.`)
		.setThumbnail('attachment://u_announcement.png')
		.setFooter(`Signed, ${message.member.user.tag} on behalf of the ${server_name} team.`, `${logo}`);
		message.delete()
		message.channel.send(say);
	}
};