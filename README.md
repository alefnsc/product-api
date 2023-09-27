
## Table of Contents

1. [Introduction](#1-introduction)
2. [Installation](#3-installation)
3. [Usage](#3-usage)
4. [Methods](#4-methods)
5. [Libraries Used](#5-libraries-used)
6. [Contact](#6-contact)

---

## 1. Introduction

Welcome to the documentation for the Product API. This project aims to provide a RESTful API for managing products. 

The purpose of this project was to study unit tests, integration tests and virtualization using docker to maintain and manage postgreSQL's database image.

## 2. Installation

To install and set up the project locally, follow these steps:

1. Clone the project repository from GitHub:

```bash
git clone https://github.com/alefnsc/product-api.git
```

2. Navigate to the project directory:

```bash
cd product-api
```

3. Install project dependencies using npm:

```bash
npm install
```

## 3. Usage

After installation, you can start the server by running:

```bash
npm start
```

This will start the Express server and make the API available at http://localhost:3000.

To perform tests you can run:

```bash
npm test
```

To try it on the watch mode, just run:

```bash
npm run watch
```

## 4. Methods

**Product**

- **getProducts():** Retrieves all product.
- **createProduct(product):** Creates a new product.
- **updateProduct(id, owner):** Updates an existing product by its ID.
- **deleteProduct(id):** Deletes an owner by its ID.
  
## 5. Libraries Used

- **jest:** Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

- **supertest:** Supertest is a Node. js library that allows developers and testers to test the APIs. It enables developers and testers to write automated tests for routes and endpoints.

- **cors:** A package that enables Cross-Origin Resource Sharing (CORS) in Express applications, allowing controlled access to resources from different origins.

- **express:** A popular web application framework for Node.js used to create APIs and web servers. It simplifies routing, middleware, and handling HTTP requests.

- **mongodb:** The official MongoDB driver for Node.js, providing methods for interacting with MongoDB databases.

- **nodemon:** A tool that monitors changes in your source code and automatically restarts the Node.js application when changes are detected. Great for development.

- **pg:** A PostgreSQL client for Node.js that enables you to interact with PostgreSQL databases.

- **sequelize:** A promise-based Node.js ORM (Object-Relational Mapping) for relational databases like PostgreSQL, MySQL, SQLite, etc.

- **winston:** A popular logging library for Node.js that offers flexible and configurable logging options.

## 6. Contact

- **Maintainer:** Alexandre Fonseca
- **Email:** alexandrefonsecach@gmail.com
