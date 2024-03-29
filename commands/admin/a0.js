const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'a0',
			group: 'admin',
			description: 'Announce an update. | `.a0 <Update Message>`',
			memberName: 'update',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		const attachment = new Discord
		.MessageAttachment('./assets/icons/update.png', 'update.png')
		
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Update`)
		.setDescription(message.content.split(" ").slice(1).join(" "))
		.setColor(57099)
		.attachFiles(attachment)
		.addField('\u200b', '\u200b')
		.addField(`This is an official update!`, `Please read for an exciting update!`)
		.setThumbnail('attachment://update.png')
		.setFooter(`Signed, ${message.member.user.tag} on behalf of the ${server_name} team.`, `${logo}`);
		message.delete()
		message.channel.send(say);
	}
};