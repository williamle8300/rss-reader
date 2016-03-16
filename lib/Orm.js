import bookshelf from 'bookshelf';
import knex from 'knex';

export default bookshelf(knex({
	client: 'postgresql',
	connection: {
		host: '127.0.0.1',
		user: 'william',
		password: '',
		database: 'rss_reader',
		charset: 'utf-8'
	}
}));