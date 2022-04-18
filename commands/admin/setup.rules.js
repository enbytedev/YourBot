const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../../config/branding.json');
const {server_name} = require('../../config/branding.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'setup.rules',
			group: 'admin',
			description: 'Generate rule text. | `.setup.rules`',
			memberName: 'setup.rules',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
			//GENERAL
			let sayChat = new Discord.MessageEmbed() //embed
	.setAuthor('Chat Infractions', `${logo}`)
	.setDescription('These are the basic chat rules! Staff reserve the right to moderate at their discretion.')
	.setColor(2549570)
	.addField('➤ Stay Respectful', `>>> Refrain from causing drama. Do not threaten, harass or start arguments with members within ${server_name}. We maintain **zero tolerance** for harassment or hate speech of any kind!`)
	.addField('➤ Remain SFW', `>>> Names, nicknames, profile pictures, external emojis and other forms of content are requested to stay generally SFW. Memes may bend the rules so long as nudity, gore or otherwise NSFW aspects do not make apearances.`)
	.addField('➤ Chat Etiquette', `>>> We respect all people, however we have difficulty moderating different languages. For this reason, we ask that members speak in **English** only. Furthermore, we request players to refrain from spamming (including chained mesages,) excessive caps, or advertising anything unrelated to ${server_name}.`)	
	.addField('➤ Voice Chat Etiquette', `>>> "Ear-R*pe" and/or other intentional screeching is unneccesary, annoying, and therefore disallowed. All text chat rules apply.`)	
	.addField('➤ Other Rules', `>>> Do not leak personal information, repeatedly ping or mass mention.`)	

			let sayPS = new Discord.MessageEmbed() //embed
	.setAuthor('Other Information', `${logo}`)
	.setColor(15928589)
	.addField('**Support**', `>>> There are many ways to get support. Please use our ticketing system to recieve such support.`)
	.addField('**Suggestions**', `>>> Suggestions are handled via '.suggest <suggestion>'.`)
	.addField('**Punishments**', `>>> Punishments are not always set and are more frequently handled on a case by case basis.`)
			let sayFinal = new Discord.MessageEmbed() //embed
	.setAuthor('Final Words', `${logo}`)
	.setColor(3080406)
	.setDescription('These rules are based on common sense. Be a kind, respectful and reasonable member of the community and you will always have the benefit of the doubt!')
	.addField('**By participating and entering the server, you agree to abide by the rules to the best of your ability.**', 'In moving to the main chat, you confirm you have read and agreed to the rules.')

	
message.delete();
message.channel.send(sayChat);
message.channel.send(sayPS);
message.channel.send(sayFinal);
	}
};
