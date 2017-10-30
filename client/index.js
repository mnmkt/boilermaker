const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const bodyParser = require('body-parser');

app.use(volleyball);

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
