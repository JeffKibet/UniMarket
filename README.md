UNIMARKET

PROJECT DESCRIPTION

UniMarket is a web-based campus marketplace that allows students to buy and sell items easily within their university community. The platform provides a centralized space where users can list products such as textbooks, electronics, and everyday essentials.

This project solves the problem of scattered buying and selling across WhatsApp groups and social media by offering a simple, organized, and accessible marketplace.

How It Works
- Users navigate to the Post page to list an item for sale.
- They enter item details (name, description, price) and upload an image.
- The application stores the item data using localStorage.
- The item appears on the Home page (index.html) for all users to view.
- Users can click "View Details" to see full product information on the Product page (product.html)

Author Information
Name: Jeff Kibet  
Email: jefferykibet@gmail.com  
GitHub: https://github.com/JeffKibet/UniMarket

Setup Instructions

 Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor ( VS Code)

Installation

1. Clone or download the project:
git clone https://github.com/yourusername/unimarket.git
cd unimarket
Open the project:
Simply open index.html in your browser.

Usage
Go to Post page
Fill in item details
Upload an image
Click Submit
View the item on:
Home page (all items)
Product page (single item view)

BDD (Behavior-Driven Development)
Feature: User can post and view items
Scenario 1: User posts a valid item

Given: The user is on the Post page
When: The user fills in all fields and submits the form
Then: The item is saved and displayed on the homepage

Scenario 2: User submits incomplete form

Given: The user is on the Post page
When: The user leaves some fields empty and submits
Then: An error message is displayed

Scenario 3: User views item details

Given: Items exist in the marketplace
When: The user clicks "View Details"
Then: The product page displays full item information

Scenario 4: No items available

Given: No items have been posted
When: The user visits the homepage
Then: A message is displayed indicating no items are available