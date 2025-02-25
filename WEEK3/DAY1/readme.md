# Node.js Server Setup Guide

## Introduction
This guide will help you create a server with Node.js. We'll cover the following steps:
1. Initialize your project
2. Install dependencies
3. Create config, models, controllers, and routes
4. Configure .env file


## Step 1: Initialize your project
1. Open your terminal and navigate to the directory where you want to create your project.
2. Run the following command to initialize a new Node.js project and create a `package.json` file:
```
npm init -y
```


## Step 2: Install dependencies
````
1.    npm install express mongoose dotenv cors
2.    Add "type": "module" to Your package.json
3.    npm install --save-dev nodemon

4.    update the scripts section to include a start command for Nodemon

    "scripts": {
       "start": "node server.js",
        "dev": "nodemon server.js"
} 

````

## Step 3: Create config, models, controllers, and routes

1. Create the directory structure:

``
mkdir config models controllers routes
``

2. Create a basic server file

<don't forget Middlewares inside server 
app.use(cors());
app.use(express.json());>



## Step 4: Configure .env file

1. MONGODB_URI=your_mongodb_connection_string
PORT=3000