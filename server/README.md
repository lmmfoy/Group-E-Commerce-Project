# Backend

# ENDPOINTS:


## Get array of all products: 
.get("/products", getAllItems)

This returns an array of objects, showing each product in the "products" collection of the database.

The objects in the array will look like this:
```
{
    "_id": id,
    "name": "name",
    "price": "price (as a string)",
    "body_location": "body location",
    "category": "category",
    "imageSrc": "base 64 image source",
    "numInStock": number in stock,
    "companyId": id
}
```

---

## Get specific product:
.get("/products/:_id", getSingleItem)

This returns an object with all the info about a single product. Product ID must be included in the path.

The object will look like this: 
```
{
    "_id": id,
    "name": "name",
    "price": "price (as a string)",
    "body_location": "body location",
    "category": "category",
    "imageSrc": "base 64 image source",
    "numInStock": number in stock,
    "companyId": id
}
```
---

## Update the number in stock of a product:
.patch("/products/:_id", updateItem)

This updates the in-stock number of an item in the "products" collection after a user has purchased an item. The item ID must be sent in the URL params, and the new in-stock number must be sent in the req body with the key "numInStock".

---
## Get all items in specific category
.get("/products/categories/:_category", getCategoryItems)

This allows you to get an array of all products in a certain category (fitness, medical, etc). Category must be included in path. 

The objects in the array will look like this: 
```
{
    "_id": id,
    "name": "name",
    "price": "price (as a string)",
    "body_location": "body location",
    "category": "category",
    "imageSrc": "base 64 image source",
    "numInStock": number in stock,
    "companyId": id
}
```
---

## Get information about a company
.get("/products/company/:company_id", getCompanyInfo)

This returns an object with information about a company (name, country, website). Must include the company ID (found in the individual item's info) in the path. The handler also adds a country code to this object.

The object looks like this:
```
{
    "_id": id,
    "name": "company name",
    "url": "company website",
    "country": "company country",
    "countryCode": "country code"
}
```