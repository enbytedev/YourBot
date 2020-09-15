const { Command } = require('discord.js-commando');
const Discord = require("discord.js");
const {branding} = require('../commandconf.json');
const {server_name} = require('../commandconf.json');

module.exports = class a0Command extends Command {
	constructor(client) {
		super(client, {
			name: 'setup.tutorial',
			group: 'first',
			description: 'Generate staff tutorial text.',
			memberName: 'tutorial',
			clientPermissions: ['ADMINISTRATOR'],
			userPermissions: ['ADMINISTRATOR'],
		});
	}

	run(message) {
			//UPDATE
let sayUpdate = new Discord.MessageEmbed() //embed
	.setTitle(".a0 <message>")
	.setDescription(`Messages a(n) **${server_name} Update**`)
	.setColor(57099)
			//ANNOUNCEMENT
let sayAnnouncement = new Discord.MessageEmbed() //embed
	.setTitle(".a1 <message>")
	.setDescription(`Messages a(n) **${server_name} Announcement**`)
	.setColor(15300096)
			//URG ANNOUNCEMENT
let sayUrgAnnouncement = new Discord.MessageEmbed() //embed
	.setTitle(".a2 <message>")
	.setDescription(`Messages a(n) **${server_name} Urgent Announcement**`)
	.setColor(9895936)
			//POLL
let sayPoll = new Discord.MessageEmbed() //embed
	.setTitle(".poll <message>")
	.setDescription(`Messages a(n) **${server_name} Poll**`)
	.setColor(852124)
			//CLEAR
let sayClear = new Discord.MessageEmbed() //embed
	.setTitle(".clear <1-100>")
	.setDescription("Clears the number of messages specified up to 14 days.")
	.setColor(9605778)

	message.delete();
	message.channel.send(sayUpdate);
	message.channel.send(sayAnnouncement);
	message.channel.send(sayUrgAnnouncement);
	message.channel.send(sayPoll);
	message.channel.send(sayClear);
	}
};