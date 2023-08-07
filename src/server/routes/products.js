const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function (req, res) {
    foundProducts = await Product.find({})
    res.json(foundProducts)
})

router.get('/:productId', async function (req, res) {
    const productId = req.params.productId
    try {
        foundProduct = await Product.findById(productId)
        res.json(foundProduct)
    } catch (error) {
        res.status(422).send({ errors: [{ title: 'Product error', detail: 'Product not found' }] })
    }
})

module.exports = router