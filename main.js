const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const {token} = require('./config.json');

const client = new CommandoClient({
  commandPrefix: '.',
  owner: '259063263604506634',
  invite: '',
});

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