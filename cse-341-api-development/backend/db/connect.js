const { MongoClient } = require("mongodb");

// 1. Load the URL from the .env file
const connectionString = process.env.MONGODB_URI;

let _db;

const initDb = (callback) => {
  // Check if an active connection already exists
  if (_db) {
    console.log("Database is already initialized!");
    return callback(null, _db);
  }

  // 2. Connect using our environment variable
  MongoClient.connect(connectionString)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error("Database not initialized");
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
