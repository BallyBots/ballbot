const commando = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class EmbedCommand extends commando.Command
{
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'economy',
            memberName: 'embed',
            description: 'Embeds the text you provide.',
            examples: ['embed Embeds are cool.'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to embed?',
                    type: 'string'
                }
            ]
        });    
    }

    run(msg, args) {
        const { text } = args;
        const embed = new RichEmbed()
        .setDescription(text)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setColor(0x00AE86)
        .setTimestamp();
    return msg.embed(embed);
    }
};
module.exports = EmbedCommand;