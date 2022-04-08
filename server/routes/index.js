const express = require('express');
const app = express();

app.use('/Users', require('./Users'));
app.use('/Citas', require('./cita'))

module.exports = app;