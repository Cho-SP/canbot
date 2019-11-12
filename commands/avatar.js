module.exports = {
    name: 'avatar',
    description: 'avatar!',
    aliases: ['icon', 'pfp'],
	execute(message, args) {
		message.channel.send(message.author.avatarURL);
	},
};