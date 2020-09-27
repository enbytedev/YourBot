const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'squid',
			group: 'second',
			description: 'Daily Squidward | `.squid`',
			memberName: 'squid',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ADD_REACTIONS', 'MANAGE_MESSAGES'],
			userPermissions: [],
		});
	}

	run(message) {
		const attachment = new Discord
		.MessageAttachment('./assets/second/squid.png', 'squid.png');
		let say = new Discord.MessageEmbed() //embed
		.setTitle("What is your Squidward today?")
		.setDescription('The council will decide your fate later... not now.')
		.setColor(852124)
		.attachFiles(attachment)
		.setImage('attachment://squid.png');
	 message.delete()
	 message.channel.send(say).then(sentEmbed => {
		sentEmbed.react("1️⃣")
		.then(() => sentEmbed.react("2️⃣"))
		.then(() => sentEmbed.react("3️⃣"))
		.then(() => sentEmbed.react("4️⃣"))
		.then(() => sentEmbed.react("5️⃣"))
		.then(() => sentEmbed.react("6️⃣"))
		.then(() => sentEmbed.react("7️⃣"))
		.then(() => sentEmbed.react("8️⃣"))
		.then(() => sentEmbed.react("9️⃣"))
	});		
		
	}
};