var knex = require('knex');
var dbConfig = {
	client: 'postgresql',
	connection: {
		host: '127.0.0.1',
		user: 'william',
		password: '',
		database: 'rss_reader',
		charset: 'utf-8'
	}
};

var bookshelf = require('bookshelf')(knex(dbConfig));

bookshelf.plugin('registry');

module.exports = bookshelf;