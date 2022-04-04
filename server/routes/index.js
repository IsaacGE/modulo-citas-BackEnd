const express = require('express')
const app = express()

app.use('/cita', require('./cita'))
app.use('/Users', require('./Users'));

module.exports = app