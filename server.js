var Good = require('good');
var GoodConsole = require('good-console');
var Hapi = require('hapi');

var HomeRoutes = require('./routes/home');
var RssFeedRoutes = require('./routes/rss-feed');

var server = new Hapi.Server();

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
}], function (err) {
		
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