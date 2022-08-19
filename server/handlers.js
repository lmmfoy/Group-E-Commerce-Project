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
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do
const getSingleItem = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do?
const postPurchasedItem = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do?
const patchPurchasedItem = async (req, res) => {
  try {
    await client.connect();
    const db = client.db();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// To Do?
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
  postPurchasedItem,
  patchPurchasedItem,
  deleteCart,
};
