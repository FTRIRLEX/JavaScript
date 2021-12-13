const { Router } = require('express')
const Product = require('../models/product')

const router = Router()

router.get(
    '/', (req, res) => {
        res.render('forms', {
            title: 'form page',
            isFormPage: true
        })
    }
)

router.post('/', async(req, res) => {
    const product = new Product(req.body.product, req.body.price, req.body.img)
    await product.save();
    res.redirect('/about')
})

module.exports = router