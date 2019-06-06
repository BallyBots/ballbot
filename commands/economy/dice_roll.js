const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'economy',
            memberName: 'roll',
            description: 'Rolls a six sided dice',
            guildOnly: true,
        });
    }

    async run(message,args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.send("Your dice landed on " + diceRoll);
    }
}

module.exports = DiceRollCommand;