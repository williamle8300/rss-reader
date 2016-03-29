module.exports = {
	rethink: {
	  host: process.env.RETHINKDB_HOST || 'localhost',
	  port: parseInt(process.env.RETHINKDB_PORT) || 28015,
	  db: process.env.RETHINKDB_DB || 'aloe',
	  tables: {
	  	rss_feed: 'id',
	  },
	},
	server: {
		host: process.env.SERVER_HOST || 'localhost',
		port: process.env.SERVER_PORT || '3000',
	}
}