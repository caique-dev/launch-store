const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.send('ok')
})

// error 404
routes.use((req, res) => {
    return res.status(404).render("not-found");
});

module.exports = routes