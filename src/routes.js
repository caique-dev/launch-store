const express = require('express')
const productsController = require('./controllers/products')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.render('layout')
})

routes.get('/products/create', productsController.create)

routes.get('/add/create', (req, res) => {
    return res.redirect('/products/create')
})

// error 404
routes.use((req, res) => {
    return res.status(404).render("not-found");
});

module.exports = routes