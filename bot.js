const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'rules') {
    	message.reply('response');
  	}
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Hi! Thanks for joining the official Vertex Discord! Commands are simple once you get the hang of it! \n "!rules" shows you the list of rules. \n "!login" shows you my login info for all the important sites I use. ');
  	}
});

client.on('message', message => {
    if (message.content === '!login') {
    	message.reply('Bitch fuck off you think I would actually do that, idek why you would try it xD');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
