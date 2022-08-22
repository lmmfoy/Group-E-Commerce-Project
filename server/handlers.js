"use strict";

const countryCodes = require("./data/countryCodes.json");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

// Get an array of all products in "products" collection
const getAllItems = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("EcommerceDatabse");

    const result = await db.collection("products").find().toArray();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// Get specific product based on id
const getSingleItem = async (req, res) => {
  const _id = parseInt(req.params._id);

  try {
    await client.connect();
    const db = client.db("EcommerceDatabse");

    const result = await db.collection("products").findOne({ _id });

    res.status(200).json({ status: 200, _id, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err });
  }
};

// Update the number in stock of a product in the "products" collection
const updateItem = async (req, res) => {
  const _id = parseInt(req.params._id);

  const newNumInStock = req.body.numInStock;

  try {
    await client.connect();
    const db = client.db("EcommerceDatabse");

    const result = await db
      .collection("products")
      .updateOne({ _id }, { $set: { numInStock: newNumInStock } });

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    res.status(404).json({ status: 404, data: err.message });
  }
};

// Get all items in specific category
const getCategoryItems = async (req, res) => {
  let category = req.params._category;

  // If the category is "Pets", update to "Pets and Animals" as that's what's in the database
  category === "Pets" && (category = "Pets and Animals");

  try {
    await client.connect();
    const db = client.db("EcommerceDatabse");

    const categoryItems = await db
      .collection("products")
      .find({ category: category })
      .toArray();

    res.status(200).json({ status: 200, data: categoryItems });
  } catch (err) {
    res.status(404).json({ status: 404, data: err.message });
  }
};

// Get information about a product's company with company ID
const getCompanyInfo = async (req, res) => {
  const company_id = parseInt(req.params.company_id);

  try {
    await client.connect();
    const db = client.db("EcommerceDatabse");

    const result = await db
      .collection("companies")
      .findOne({ _id: company_id });

    // Find the country code of the company's country to use in the frontend to add a flag
    const countryCode = countryCodes.find(
      (item) => item.name === result.country
    ).code;
    if (countryCode) {
      result.countryCode = countryCode;
    }

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
  getCategoryItems,
  getCompanyInfo,
  postPurchasedItem,
  deleteCart,
};
