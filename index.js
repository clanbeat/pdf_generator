const express = require('express');
const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');

const nunjucks = require('nunjucks');
const app = express();

const renderer = nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

const invoiceReq = require('./handlers/invoice.js')(renderer);

app.get('/api/invoice', bodyParser.json(), invoiceReq.get);

app.listen(process.env.PORT, () => {
    console.log('Started on port ' + process.env.PORT);
});
