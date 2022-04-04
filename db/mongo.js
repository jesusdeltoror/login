const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://torocorp:123@test.ppak3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
/* const url = 'mongodb://localhost:27017'; */
const client = new MongoClient(url);

const dbName = 'loginDB';

module.exports = {client, dbName};