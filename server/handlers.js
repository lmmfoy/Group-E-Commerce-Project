"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

// To Do
const getAllItems = async (req, res) => {
  try {
    await client.connect();
    const db = client.db('EcommerceDatabse');

    const result = await db.collection("products").find().toArray();
    
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do
const getSingleItem = async (req, res) => {
  // const item = req.params.item;
  const _id = parseInt(req.params._id);
  
  try {
    await client.connect();
    const db = client.db('EcommerceDatabse');

    const result = await db.collection("products").findOne({ _id });

    res.status(200).json({ status: 200, _id,  data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do?
const updateItem = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// Possible To Do - Stretch
const postPurchasedItem = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// Possible To Do - Stretch
const deleteCart = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

module.exports = {
  getAllItems,
  getSingleItem,
  updateItem,
  postPurchasedItem,
  deleteCart,
};
