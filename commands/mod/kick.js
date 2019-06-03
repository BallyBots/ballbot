const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'mod',
            memberName: 'kick',
            description: 'Kicks a user, (**Requires Mod Role**)'
        });
    }

    async run(message,args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Your coin landed on Heads!")
        }
        else
        {
            message.reply("Your coin landed on Tails!");
        }
    }
}

module.exports = KickCommand;