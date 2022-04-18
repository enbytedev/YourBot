const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

const attr = [
"nerd",
"asshole",
"bitch",
"crybaby",
"geek",
"prick",
"epic gamer",
"poopyfuck",
]
const talkedRecently = new Set();

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'wai',
			group: 'fun',
			description: 'What are you? | `.wai`',
			memberName: 'wai',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: [],
		});
	}

	run(message) {
		
		if (talkedRecently.has(message.author.id)) {
			
				let wait = new Discord.MessageEmbed() //embed
			.setTitle("You have become:")
			.setDescription("100% poopyfuck")
			.setColor(57099)
				.setFooter('I said no re-trys, stupid. Wait five minutes (from last usage) to get a different result.');
		message.author.send(wait);
					 message.delete()
		} else {

					 message.delete()
					function getRandomIntInclusive(min, max) {
						min = Math.ceil(min);
						max = Math.floor(max);
						return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
					}

							let wai = new Discord.MessageEmbed() //embed
						.setTitle(message.member.user.tag+" is currently:")
						.setDescription(Math.floor(Math.random() * 100)+"% "+attr[Math.floor(Math.random() * attr.length)])
						.setColor(57099)
						.setFooter('You are what you get first. No re-trys.');
					message.channel.send(wai);

				// Adds the user to the set so that they can't talk for a minute
				talkedRecently.add(message.author.id);
				setTimeout(() => {
					// Removes the user from the set after a minute
					talkedRecently.delete(message.author.id);
				}, 300000);
		}
		
		
	}
};