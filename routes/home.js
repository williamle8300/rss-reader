module.exports = [
	{
	  path: '/',
	  method: 'GET',
	  handler: (request, reply) => {
		  reply('Hello world!');
	  }
	},
	{
		path: '/{name}',
		method: 'GET',
		handler: (request, reply) => {
			reply('Hello ' +encodeURIComponent(request.params.name));
		}
	}
];
