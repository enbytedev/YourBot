// Thanks slothiful on StackOverflow!
const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {logo} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'p.vote',
			group: 'first',
			description: 'Advanced poll. | `.p.vote <The Question> "<Response 1>" "<Response 2-26>"`',
			memberName: 'p.vote',
			clientPermissions: ['SEND_MESSAGES', 'VIEW_CHANNEL', 'ADD_REACTIONS', 'MANAGE_MESSAGES'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
	const args = message.content.trim().split(/ +/g);
	const options = [
		'🇦',
		'🇧',
		'🇨',
		'🇩',
		'🇪',
		'🇫',
		'🇬',
		'🇭',
		'🇮',
		'🇯',
		'🇰',
		'🇱',
		'🇲',
		'🇳',
		'🇴',
		'🇵',
		'🇶',
		'🇷',
		'🇸',
		'🇹',
		'🇺',
		'🇻',
		'🇼',
		'🇽',
		'🇾',
		'🇿',
	];
	
	// Defining the question...
	let question = [];

	for (let i = 1; i < args.length; i++) {
		if (args[i].startsWith('"')) break;
		else question.push(args[i]);
	}

	question = question.join(' ');

	// Defining the choices...
	const choices = [];

	const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
	let match;
	while (match = regex.exec(args.join(' '))) choices.push(match[2]);

	// Creating and sending embed...
	let content = [];
	for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
	content = content.join('\n');

	var embed = new Discord.MessageEmbed()
		.setColor('#8CD7FF')
		.setTitle(`**${question}**`)
		.setDescription(content)
		.setFooter(`Signed, your ${server_name} team`, `${logo}`);
	message.delete()
	message.channel.send(`:bar_chart: ${message.author} started a poll for ${server_name}`, embed)
		.then(async m => {
			for (let i = 0; i < choices.length; i++) await m.react(options[i]);
		});
	
	
	
	}
};