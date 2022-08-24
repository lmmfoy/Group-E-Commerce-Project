const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const items = require("./data/items.json");
const companies = require("./data/companies.json");

//function that will import the data to MongoDB;
//Project Database name: EcommerceDatabase, collections: products
const batchImport = async (dbName) => {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  console.log("connected");

  const db = client.db(dbName);
  await db.collection("products").insertMany(items);
  // await db.collection("companies").insertMany(companies);
  client.close();
  console.log("disconnected");
};

//Ran in terminal with node, commented out afterwards
batchImport("EcommerceDatabse");
