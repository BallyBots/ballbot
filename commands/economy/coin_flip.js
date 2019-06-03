const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'economy',
            memberName: 'flip',
            description: 'Flips a coin, landing on either Heads or Tails'
        });
    }

    async run(message,args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.channel.send("Your coin landed on Heads!")
        }
        else
        {
            message.channel.send("Your coin landed on Tails!");
        }
    }
}

module.exports = CoinFlipCommand;