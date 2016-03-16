'use strict'

import Good from 'good';
import GoodConsole from 'good-console';
import Hapi from 'hapi';

import HomeRoutes from './routes/home';
import RssFeedRoutes from './routes/rss-feed';

const server = new Hapi.Server();

server.connection({
	routes: {cors: true},
	host: 'localhost',
	port: 3000
});

server.register([{
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
}], (err) => {
		
	if (err) {
		throw err;
	};

	server.route(HomeRoutes);
	server.route(RssFeedRoutes);

	server.start((err) => {

		if (err) {
			throw err;
		};

		server.log('info', 'Server running at: ' +server.info.uri);
	});
});