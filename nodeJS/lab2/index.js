const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homerouter = require('./routes/home')
const aboutrouter = require('./routes/about')
const formsrouter = require('./routes/form')
const cardrouter = require('./routes/card')


const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use('/', homerouter)
app.use('/about', aboutrouter)
app.use('/add', formsrouter)
app.use('/card', cardrouter)








const PORT = process.env.PORT || 3000


app.listen(PORT, () =>
    console.log(`server running on port ${PORT}`)
)