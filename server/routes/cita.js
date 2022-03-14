const citaModel = require('../models/cita.model')
const express = require('express')
const app = express()

app.get('/', async(req, res) => {
    return res.status(200).json({
        ok: true,
        status: 200,
        text: "OK"
    })
})

app.post('/', async(req, res) => {
    try {
        let body = req.body
        let cita = new citaModel(body)

        console.log(body)

        if (body) {
            return res.status(200).json({
                ok: true,
                status: 200,
                body
            })
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            status: 500,
            body
        })
    }
})

module.exports = app