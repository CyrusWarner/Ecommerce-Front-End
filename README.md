# Star Wars Ecommerce Front-End
## Implementation of a Star Wars themed ecommerce web application

![](/Images/ShoppingCart.png)

Creates a pleasing user interface for Star Wars fans looking for a way to sell Star Wars products online

## Table of Contents
- [Project Status](#project-status)
   - [Goals](#goals)
   - [Task List](#task-list)
   - [Future Tasks](#future-tasks)
- [Technologies](#technologies)
- [Bugs](#bugs)
- [Images](#Images)

---
## Project Status :green_circle:
### Goals
- Enable a user to register for the website
- Enable a user to login to the website
- Enable a user to sell a Star Wars product
- Enable a user to view all  products
- Enable a user to review a product
- Enable a user to view all the products they are selling
- Enable a user to remove or update a product they are selling
- Enable a user to view all the products in their cart
- Enable a user to remove a product from their cart
- Enable a user to purchase a product

### Task List: 
:heavy_check_mark: Create a pleasing User Interface 

:heavy_check_mark: Enable a user to chat within the web application

:heavy_check_mark: Enable a user to email another application user

:heavy_check_mark: Enable a user to view their tasks displayed on a calendar or a table view

:heavy_check_mark: Enable a user to add a new member to their board, Change a users role, and remove a member from a board

:heavy_check_mark: Enable a user to upload a .csv file to bulk update their events and bugs

:heavy_check_mark: Enable a user to mark a bug as complete or in complete

:heavy_check_mark: Enable a user to take notes within the application

:heavy_check_mark: Added copy functionality for a users email in email section of a board

<!--- 
Emojis for the Task List:
DONE =      :heavy_check_mark:
NOT DONE =  :x:
WIP =       :recycle:
BUGGED =    :warning:
 --->

### Future Tasks  
:x: Add ability to add multiple images for a product

:x: Add a settings option to allow users to change their password or delete their account

:x: Add a graph for users to see how much money they are making from the products they are selling

---
## Technologies
- Visual Studio Code
- ASP.NET Core Web API
- React
- React Bootstrap
- Bootstrap
- Git / GitHub
- Toastify API
- ParticlesJS API
- Stripe API
- React Icons
---
## Design
### Home
- Implemented particles JS background with moving Star Wars background found on Codepen.
- Implemented a footer displaying all contributors to the project
### Sell a product
- Implemented a form so a user can create a new product with a image
### View products
- Implemented a search for products and filter by category of products
- Implemented a React Bootstrap card to display product images, product reviews with star rating, and product description
- Implemented a button for each product to allow a user to quickly add the item to their cart
### My products
- Implented a modal for updating a users products
- Implemented a modal for removing a users products
### View a product 
- Implemented a form to allow a user to add a new review
- Implemented a display for all reviews
- Implemented a Star Wars themed display for reviews and product title
### Shopping Cart
- Implemented a display for all of a users products they are purchasing using React Bootstrap
- Implemented stripe API to allow a user to purchase a product
- Implemented functionality for changing the quantity of products they are purchasing

---
## Bugs
- Uploading photo for a product:
   - Currently when there are many photos in the Back-End the API calls are taking alot more time then it needs.

---
## Images
![](/Images/AllProducts.png)

---

![](/Images/Product.png)

---

![](/Images/SellProduct.png)

---

![](/Images/UserProducts.png)
