# Serverless functions


## Task
Today we want you to explore serverless functions on Netlify by adding some dynamic data to your product detail pages.

You should build a serverless function that takes a product id (hint: slug) and searches a database of your choice and returns the available quantity.
This number should be displayed on the page.

1. Create a MongoDB Atlas database and add stock quantity data for each product. You only need to read this data, not update it. 
2. Use the /pages/api directory that Next.js supplies in the starter (This is your API).
3. Add a file where you will export the handler function to handle your MongoDB requests. [check out the documentation here](https://nextjs.org/docs/api-routes/introduction).

Reminder: Use environment variables for your credentials. DO NOT hard code them.

## Bonus assignment

If you have time, add a `buy` button that updates the stock quantity in the database.
You do not need to add shoppingcart functionality, unless you want to :)




