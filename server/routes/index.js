const express = require('express')
const app = express()

app.use('/cita', require('./cita'))


module.exports = app