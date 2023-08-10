const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const products = require('./routes/products')

mongoose.connect(config.DB_URI).then(
    () => {
        const fakeDb = new FakeDb()
        fakeDb.initDb()
    }
);

const app = express()

const PORT = process.env.PORT | '3001'

app.use('/api/v1/products', products)

app.listen(PORT, function () {
    console.log('I am running!')
})