var R = require('rethinkdb');

var Config = require('../config')
var Database = require('../database');


module.exports = [
	{
	  path: '/',
	  method: 'GET',
	  handler: function (request, reply) {
			
			Database.connect(function (err, connection) {
				
				if (err) {
					throw err;
				};
				
				R.table('rss_feed').run(connection, function (err, cursor) {

					//get everything in rss_feed
					reply(connection._id);
				});
			});
	  }
	},
];