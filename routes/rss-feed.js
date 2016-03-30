var FeedRead = require('feed-read');
var Joi = require('joi');
var R = require('rethinkdb');

var Config = require('../config');
var Database = require('../database');


module.exports = [
	{
		path: '/rss-feed',
		method: 'POST',
		config: {
      validate: {
        payload: {
          url: Joi.string().required(),
        }
			}
		},
		handler: function (request, reply) {
 
		 	var url = request.payload.url;
			
 		  FeedRead(url, function (err, data) {
 		  	
				if (err) {
					throw err;
				};
				
				reply(data);
 		  });

			// Database.connect(function (err, connection) {
			//
			// 	if (err) {
			// 		throw err;
			// 	};
			//
			// 	R.table('rss_feed')
			// 		.insert({
			// 			cool: request.payload.blarb
			// 		})
			// 		.run(connection, function (err, result) {
			//
			// 			if (err) {
			// 				throw err;
			// 			};
			//
			// 			reply(result);
			// 		});
			// })
		}
	},
	{
		path: '/rss-feed',
		method: 'GET',
		handler: function (request, reply) {
			
			Database.connect(function (err, connection) {
				
				if (err) {
					throw err;
				};
				
				R.table('rss_feed')
					.run(connection, function (err, cursor) {

						if (err) {
							throw err;
						};
						
						cursor.toArray(function (err, results) {
							reply(results);
						});
					});
			});
		}
	},
	{
		path: '/rss-feed/{id}',
		method: 'GET',
		config: {
			validate: {
				params: {
					id: Joi.string().required()
				}
			}
		},
		handler: function (request, reply) {
			
			var id = request.params.id;
			
			Database.connect(function (err, connection) {
				
				R.table('rss_feed')
					.get(id)
					.run(connection, function (err, rssFeed) {
						
						if (err) {
							throw err;
						};
						
						reply(rssFeed);
					})
			})
		}
	},
	{
		path: '/rss-feed/{id}/url',
		method: 'PUT',
		config: {
			validate: {
				payload: {
					url: Joi.string().lowercase()
				}
			}
		},
		handler: function (request, reply) {
			
			var id = request.params.id;
			var url = request.payload.url;
			
			Database.connect(function (err, connection) {
				
				if (err) {
					throw err;
				};
				
				R.table('rss_feed')
					.get(id)
					.update({url: url})
					.run(connection, function (err, result) {
						
						if (err) {
							throw err;
						};
						
						reply(result);
					});
			});
		}
	},
	
	//some UPDATE methods go here!
	
	{
		path: '/rss-feed/{id}',
		method: 'DELETE',
		config: {
			validate: {
				params: {
					id: Joi.string().required()
				}
			}
		},
		handler: function (request, reply) {
			
			var id = request.params.id;
			
			Database.connect(function (err, connection) {
				
				if (err) {
					throw err;
				};
				
				R.table('rss_feed')
					.get(id)
					.delete()
					.run(connection, function (err, result) {
						
						if (err) {
							throw err;
						};
						
						reply(result);
					})
			})
		}
	}
];