const Commando = require('discord.js-commando');
const bot = new Commando.Client();
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
// This is a simple server
http.createServer().listen(port);

bot.registry.registerGroup('economy', 'Economy');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('mod', 'Mod');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

const prefix = settings.prefixl;
const token = process.env.TOKEN;
const owner = settings.owner;

var version = '1.0.1';

const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

bot.on('ready', () => {
    console.log('The bot is online!');

});

bot.on('error', err => {
    console.log(err);
});

// Bot login
bot.login(token);