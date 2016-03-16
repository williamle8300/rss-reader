var Joi = require('joi');
var bookshelf = require('../bookshelf');

var RssFeed = require('../models/RssFeed');

module.exports = [
	{
		path: '/rss-feed',
		method: 'GET',
		handler: (request, reply) => {
			
			// reply('cool');
			new RssFeed()
				.fetchAll()
				.then(function (rssFeeds) {
					reply(rssFeeds);
				}).catch(function (error) {
					reply(error);
				});
		}
	},
	{
		path: '/rss-feed',
		method: 'POST',
		config: {
      validate: {
        payload: {
          ayylmao: Joi.string().lowercase()
        }
			}
		},
		handler: (request, reply) => {

			console.log('who');

	    new RssFeed({
        feedUrl: 'http://blablabla.com/rss'
	    })
				.save()
	      .then(function (rssFeed) {
	        reply(rssFeed);
	      }).catch(function (error) {
	        reply(error);
	      });
		}
	}
];