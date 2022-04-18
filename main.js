const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Discord = require("discord.js");
const {token} = require('./config/token.json');
const {logo, server_name, activity} = require('./config/branding.json');
const {owner_id, prefix} = require('./config/admin.json');
const {welcome_channel_id, icon1, icon2, icon3, field1, field2, field3} = require('./config/welcome.json');

const client = new CommandoClient({
  commandPrefix: `${prefix}`,
  owner: `${owner_id}`,
  invite: '',
	unknownCommandResponse: false
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
    ['admin', 'Admin commands'],
    ['fun', 'Fun commands'],
    ['wh', 'Webhook commands'],
    ['user', 'User commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity(`${activity}`);
});

client.on('error', console.error);

client.login(token);
