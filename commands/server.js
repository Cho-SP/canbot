module.exports = {
	name: 'server',
	description: 'Server Information!',
	execute(message, args) {
		message.channel.send(`서버 이름 : ${message.guild.name}\n서버 총원 : ${message.guild.memberCount}\n서버 개설일 : ${message.guild.createdAt}\n서버 지역 : ${message.guild.region}`);
	},
};