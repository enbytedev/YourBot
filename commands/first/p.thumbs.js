const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'p.thumbs',
			group: 'first',
			description: 'Thumb poll. | `.p.thumbs <The Question>`',
			memberName: 'p.thumbs',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ADD_REACTIONS', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		let embed = new Discord.MessageEmbed() //embed
		.setTitle(message.content.split(" ").slice(1).join(" "))
		.setColor(852124)
		.setFooter(`Signed, your ${server_name} team`, `${logo}`);
	 message.delete()
	 message.channel.send(`:bar_chart: ${message.author} started a poll for ${server_name}`, embed).then(sentEmbed => {
		sentEmbed.react("👍")
		.then(() => sentEmbed.react("👎"))
	});
	}
};