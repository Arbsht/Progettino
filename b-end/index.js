const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
const fs = require('fs');

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    app.use('/', express.static(__dirname + "/"));
    res.sendFile(path.join(__dirname,'www/index.html'));
    });

app.get('/api/image/btnnp', function (req, res) {
    app.use('/', express.static(__dirname + "/"));
    res.sendFile(path.join(__dirname,'www/bottonenonpremuto.png'));
    });

app.get('/api/image/btnp', function (req, res) {
    app.use('/', express.static(__dirname + "/"));
    res.sendFile(path.join(__dirname,'www/bottonepremuto.png'));
    });

app.get('/api/prova', (req, res) => {
    fs.readFile('./www/prova.json', 'utf8', (err, data) => {
    if (err) {
    console.error('Errore durante la lettura del file JSON:', err);
    return res.status(500).send('Errore interno del server');
    }
        
    const productsData = JSON.parse(data);
    console.log(typeof productsData);
    res.setHeader('Content-Type', 'application/json');
    const keys = Object.keys(productsData);
    const rand = keys[Math.floor(Math.random()*keys.length)];
    const randvalue = productsData[rand];
    let ok = "{" + "\u0022" + rand + "\u0022 : \u0022" + randvalue + "\u0022}" 
    ok = JSON.parse(ok);
    res.json(ok);
    });
    });

app.get('/api/provarnd', (req, res) => {
    fs.readFile('./www/prova.json', 'utf8', (err, data) => {
    if (err) {
    console.error('Errore durante la lettura del file JSON:', err);
    return res.status(500).send('Errore interno del server');
    }
        
    const productsData = JSON.parse(data);
    console.log(typeof productsData);
    res.setHeader('Content-Type', 'application/json');
    const keys = Object.keys(productsData);
    let rand = keys[Math.floor(Math.random()*keys.length)];
    const randvalue = productsData[rand];
    rand = keys[Math.floor(Math.random()*keys.length)];
    let ok = "{" + "\u0022" + rand + "\u0022 : \u0022" + randvalue + "\u0022}" 
    ok = JSON.parse(ok);
    res.json(ok);
    });
    });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});