const { Player } = require("discord-player");
const { Client, Intents } = require("discord.js");

global.client = new Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
  disableMentions: "everyone",
  partials: ["CHANNEL"],
});
client.config = require("./config");

global.player = new Player(client, client.config.opt.discordPlayer);

require("./src/loader");
require("./src/events");

client.login(client.config.app.token);
