const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require("discord.js");
const {token} = require('./config.json'); 
const {logo} = require('./commands/commandconf.json');
const {server_name} = require('./commands/commandconf.json');
const {welcome_channel_id} = require('./commands/commandconf.json');
const client = new CommandoClient({
  commandPrefix: '.',
  owner: '259063263604506634',
  invite: '',
	unknownCommandResponse: false,
});

// BEGIN WELCOME MESSAGE
client.on('guildMemberAdd', member => {
const welcomeEmbed = new Discord.MessageEmbed()
.setColor('#990a00')
.setTitle(`Please Welcome ${server_name}'s Newest Member!`)
.setDescription(`Please help us welcome ${member.user} to ${server_name}!`)
.addFields(
  { name: ':warning:', value: 'Please check #rules for our rules!', inline: true },
  { name: ':information_source:', value: 'Server information in #info!', inline: true },
  { name: ':loudspeaker:', value: 'Announcements are \nin #announcements!', inline: true },
)
.setTimestamp()
.setFooter(`Signed, your ${server_name} team.`, `${logo}`);
  member.guild.channels.cache.get(`${welcome_channel_id}`).send(welcomeEmbed);
})
// END WELCOME MESSAGE

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['first', 'Admin commands'],
    ['second', 'Fun commands'],
    ['third', 'Webhook commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity('based on A-Bot');
});

client.on('error', console.error);

client.login(token);