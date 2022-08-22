# Backend

## ENDPOINTS:


# Get array of all products: 
.get("/products", getAllItems)

This returns an array of objects, showing each product in the "products" collection of the database.


# Get specific product:
.get("/products/:_id", getSingleItem)

This returns an object with all the info about a single product. Product ID must be included in the path.


# Update the number in stock of a product:
.patch("/products/:_id", updateItem)

This updates the in-stock number of an item in the "products" collection after a user has purchased an item. The item ID must be sent in the URL params, and the new in-stock number must be sent in the req body.


# Get all items in specific category
.get("/products/categories/:_category", getCategoryItems)

This allows you to get an array of all products in a certain category (fitness, medical, etc). Category must be included in path.


# Get information about a company
.get("/products/company/:company_id", getCompanyInfo)

This allows you to get infromation about the company (name, country, website). Must include the company ID (found in the individual item's info) in the path. 
