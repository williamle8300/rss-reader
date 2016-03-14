export default {
  identity: 'rss-feed',
  connection: 'postgresql',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
    },
    feedUrl: {
      type : 'string',
      required : true
    }
  }
};