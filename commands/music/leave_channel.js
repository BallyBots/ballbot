const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command 
{
    constructor(client) 
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: ' Leaves the voice channel of the User'
        });
    }

    async run(message, args) 
    {
        if (message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            message.channel.send(":mailbox_with_no_mail:  **Successfully Disconnected**")
        }
        else 
        {
            message.channel.send(":x: **I am not connected to a voice channel**")
        }
    }
}

module.exports = LeaveChannelCommand;