import Joi from 'joi';

import RssFeed from '../models/RssFeed';

export default [
	{
		path: '/rss-feed',
		method: 'GET',
		handler: (request, reply) => {
			
			reply('/rss-feed!');
			// RssFeed.fetchAll().then(function (rssfeeds) {
			// 	reply(rssfeeds);
			// });
		}
	},
	{
		path: '/rss-feed',
		method: 'POST',
		config: {
      validate: {
        payload: {
          ayylmao: Joi.string().lowercase().required()
        }
			}
		},
		handler: (request, reply) => {
			
			reply(request.payload.ayylmao+ 'adfasdf :P');
			// RssFeed.fetchAll().then(function (rssfeeds) {
			// 	reply(rssfeeds);
			// });
		}
	}
];