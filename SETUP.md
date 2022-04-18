# NodeJS Setup
`git clone` it to your machine.

`npm i` in the working directory to install dependencies.

# Project Specific Configuration

Set token in `config/token.json`

Add welcome message in `config/welcome.json`

Channels specific to commands and events can be defined in `config/channels.json`

Customize branding in `config/branding.json`

Set owner ID and command prefix in `config/admin.json`

**Note:** The webhook is usually created by the user after the bots startup and before usage of .h.x commands.

# Operation
The entry point is `main.js`

[It is highly recommended that you install PM2, a node process manager.](https://pm2.keymetrics.io)