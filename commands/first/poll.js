const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'poll',
			group: 'first',
			description: 'Make a poll.',
			memberName: 'poll',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
		let say = new Discord.MessageEmbed() //embed
		.setTitle(`${server_name} Requests Your Input`)
		.setDescription(`Please read the poll below and choose wisely, as it may have an impact on the future of ${server_name}!`)
		.setColor(852124)
		.addField('The Poll is as follows:', message.content.split(" ").slice(1).join(" "))
		.setFooter(`Signed, your ${server_name} team`, `${branding}`);
	 message.delete()
	 message.channel.send(say).then(sentEmbed => {
		sentEmbed.react("👍")
		.then(() => sentEmbed.react("👎"))
	});
	}
};