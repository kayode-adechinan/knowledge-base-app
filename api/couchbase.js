require("dotenv").config();

const db = {};

const couchbase = require("couchbase");
db.cluster = new couchbase.Cluster("couchbase://localhost:8091", {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.bucket = db.cluster.bucket(process.env.DB_BUCKET);

module.exports = db;
