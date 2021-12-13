const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path')
class Product {
    constructor(product_name, price, img) {
        this.product_name = product_name
        this.price = price
        this.img = img
        this.id = uuidv4()
    }

    toJSON() {
        return {
            product_name: this.product_name,
            price: this.price,
            img: this.img,
            id: this.id
        }


    }
    async save() {
        const products = await Product.getAllProducts()
        products.push(this.toJSON())
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'),
                JSON.stringify(products),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                })
        })

    }

    static getAllProducts() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'products.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }
            )
        })
    }


    static async getById(id) {
        const products = await Product.getAllProducts();
        return products.find(c => c.id === id)
    }

}


module.exports = Product