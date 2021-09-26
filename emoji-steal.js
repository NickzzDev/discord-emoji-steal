const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    if(!msg.member.permissions.has('KICK_MEMBERS')) return msg.reply('You Do Not Have Permission To Use This Command!');

    if(!args.length) return msg.reply('Please specify some Emoji\'s!');

    for (const rawEmoji of args) {
        const parsedEmoji = Discord.Util.parseEmoji(rawEmoji);

        if (parsedEmoji.id) {
            const extension = parsedEmoji.animated ? ".gif" : ".png";
            const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
        msg.guild.emojis
        .create(url, parsedEmoji.name)
        .then((emoji) => msg.channel.send({ content:`Successfully Added: \`${parsedEmoji.name}\` Emoji!` }));
        }
    }

}
