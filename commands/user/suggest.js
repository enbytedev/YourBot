const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');
const {suggestionChannel} = require('../../config/admin.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'suggest',
			group: 'user',
			description: 'Make a suggestion. | `.suggest <Suggestion Text>`',
			memberName: 'suggest',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['SEND_MESSAGES'],
		});
	}

	run(message) {
		
		let suggestion = new Discord.MessageEmbed() //embed
		.setTitle(message.member.user.tag+`'s Suggestion for ${server_name}`)
		.setDescription(message.content.split(" ").slice(1).join(" "))
		.setColor(57099)
	.setFooter(`This is not an official announcement.`, logo);
		message.delete()
		message.guild.channels.cache.get(suggestionChannel).send(suggestion).then(sentEmbed => {
				sentEmbed.react("✅")
				.then(() => sentEmbed.react("❌"))
			});
	}
};