const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/api-armazem', { useNewUrlParser: true });
require('./src/models/Armazem');

app.use('/api', require('./src/routes'));

app.listen(3000);