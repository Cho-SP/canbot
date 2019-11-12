module.exports = {
	name: 'user-info',
	description: 'User Information!',
	execute(message, args) {
		message.channel.send(`이름 : ${message.author.username}\nID : ${message.author.id}`);
	},
};