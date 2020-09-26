const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'setup.rules',
			group: 'first',
			description: 'Generate rule text. | `.setup.rules`',
			memberName: 'setup.rules',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
			//GENERAL
			let sayGeneral = new Discord.MessageEmbed() //embed
	.setTitle("General Server Rules")
	.setThumbnail(`${logo}`)
	.setDescription('These are the general Discord rules!')
	.setColor(852124)
	.addField('➤ No blank nicknames', '➤ No inappropriate nicknames.')
	.addField('➤ No inappropriate profile pictures.', '➤ ZERO TOLERANCE for harassment or hate speech of any kind!')
	.addField('➤ No exploiting loopholes in the rules (please report them).', '➤ Use common sense.')
	
			//TEXT CHAT
			let sayText = new Discord.MessageEmbed() //embed
	.setTitle("Text Chat Rules")
	.setThumbnail(`${logo}`)
	.setDescription('These are the text chat Discord rules!')
	.setColor(852124)
	.addField('➤ Do not randomly or repeatedly ping (@) people.', '➤ Do not mass mention!')
	.addField('➤ No sexually explicit or discriminatory content!', '➤ Do not leak personal information!')
	
			//VOICE CHAT
			let sayVoice = new Discord.MessageEmbed() //embed
	.setTitle("Voice Chat Rules")
	.setThumbnail(`${logo}`)
	.setDescription('These are the voice chat Discord rules!')
	.setColor(852124)
	.addField('➤ "Ear-R*pe" and/or other intentional screeching is unneccesary, annoying, and therefore disallowed.', '➤ Stay appropriate! All text chat rules apply!')

			//FINAL WORDS
			let sayFinal = new Discord.MessageEmbed() //embed
	.setTitle("Final Words")
	.setThumbnail(`${logo}`)
	.setDescription('These rules are based on common sense. Be a kind, respectful and senseful member of the community and you will always have the benefit of the doubt!')
	.setColor(9895936)
	.addField('➤ By participating and entering the server, you agree to abide by the rules to the best of your ability.', '➤ In moving to the main chat, you confirm you have read and agreed to the rules.')

	
message.delete();
message.channel.send(sayGeneral);
message.channel.send(sayText);
message.channel.send(sayVoice);
message.channel.send(sayFinal);
	}
};