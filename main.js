const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require("discord.js");
const {token} = require('./config/token.json');
const {logo} = require('./config/branding.json');
const {server_name} = require('./config/branding.json');

const {owner_id} = require('./config/admin.json');
const {prefix} = require('./config/admin.json');

const {welcome_channel_id} = require('./config/welcome.json');
const {icon1} = require('./config/welcome.json');
const {icon2} = require('./config/welcome.json');
const {icon3} = require('./config/welcome.json');
const {field1} = require('./config/welcome.json');
const {field2} = require('./config/welcome.json');
const {field3} = require('./config/welcome.json');

const client = new CommandoClient({
  commandPrefix: `${prefix}`,
  owner: `${owner_id}`,
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
  { name: `${icon1}`, value: `${field1}`, inline: true },
  { name: `${icon2}`, value: `${field2}`, inline: true },
  { name: `${icon3}`, value: `${field3}`, inline: true },
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
    ['fourth', 'User commands'],
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
