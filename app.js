const lugar = require('./lugar/lugar');
const express = require('express')
const app = express();
const axios = require("axios");

const port = process.env.PORT || 3000;

    //peticion post
    app.post('/', function(req, res) {
        res.status(200).send('ok');
    });

    //peticion get
    app.get('/', async (req, res)=>{
        const response = await lugar.getLugarLatLng('Caracas')
        res.json(response)
    })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el port ${port}`);
})