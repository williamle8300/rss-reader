'use strict'

import Good from 'good';
import GoodConsole from 'good-console';
import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({port: 3000});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
	  reply('Hello, world!');
  }
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: (request, reply) => {
		reply('Hello ' +encodeURIComponent(request.params.name));
	}
});

server.register({
	register: Good,
	options: {
		reporters: [{
			reporter: GoodConsole,
			events: {
				response: '*',
				log: '*'
			}
		}]
	}
}, (err) => {
		
	if (err) {
		throw err;
	};
	
	server.start((err) => {
		
		if (err) {
			throw err;
		};
		
		server.log('info', 'Server running at: ' +server.info.uri);
	})
});