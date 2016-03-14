'use strict'

import DogWater from 'dogwater';
import Good from 'good';
import GoodConsole from 'good-console';
import Hapi from 'hapi';

import HomeRoutes from './routes/home';
import RssFeed from './models/RssFeed';
import RssFeedRoutes from './routes/rss-feed';

const server = new Hapi.Server();

server.connection({
	port: 3000,
	host: 'localhost'
});

const dbopts = {
	connections: {
		postgresql: {
			adapter: 'sailspg'
		}
	},
	adapters: {
		sailspg: 'sails-postgresql'
	},
	models: [RssFeed]
}

server.register([
	{
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
	},
	{
		register: DogWater,
		options: dbopts
	}
], (err) => {
		
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
	})
});