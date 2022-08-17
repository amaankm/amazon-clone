const express = require('express');
const Products= require('./data/products');
const cors= require('cors');
const dotenv = require('dotenv');

dotenv.config({path: '../.env'});

require('./db/db.js');
const User = require('./models/userSchema.js');

const PORT= process.env.PORT;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>');
})

app.get('/product', (req, res) => {
    res.json(Products);
})

app.get('/product/:id', (req, res) => {
    const product = Products.find((p) => p._id === req.params['id']);
    // console.log(product+req.params['id']);
    res.json(product);
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})