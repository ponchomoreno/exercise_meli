const express = require('express');
const axios = require('axios');
const cors = require('cors')

const requestExp = express();
requestExp.use(cors())
const port = 5000;



requestExp.get('/get/products-meli', (req,res) => {
    const itemName = req.query.nameItem
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${itemName}`).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        res.json(error.response.data);
    })
});

requestExp.get('/get/products-meli/:id', (req, res) => {
    const idProduct = req.params.id.trim();
    axios.get(`https://api.mercadolibre.com/items/${idProduct}`).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        res.json(error.response.data);
    })
});

requestExp.get('/get/products-meli/:id/description', (req, res) => {
    const idProduct = req.params.id;
    axios.get(`https://api.mercadolibre.com/items/${idProduct}/description`).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        res.json(error.response.data);
    })
});


requestExp.listen(port, () => {
    console.log('server is running on port 5000');
})