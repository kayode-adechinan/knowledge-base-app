const couchbase = require("couchbase");
export const cluster = new couchbase.Cluster("couchbase://localhost:8091", {
  username: "couchbase",
  password: "couchbase",
});

// get a reference to our bucket
export const bucket = cluster.bucket("demo");

// get a reference to the default collection
export const collection = bucket.defaultCollection();
