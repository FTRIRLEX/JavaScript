const { Router } = require('express')
const Product = require('../models/product')

const router = Router()

router.get('/', async(req, res) => {
    const products = await Product.getAllProducts()
    res.render('about', {
        title: 'About page',
        isAbout: true,
        products
    })
})

router.get('/:id', async(req, res) => {
    const product = await Product.getById(req.params.id)
    res.render('form', {
            layout: 'empty',
            title: `Product ${product.product_name}`,
            product
        }


    )
})


module.exports = router