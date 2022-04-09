const citaModel = require('../models/cita.model')
const express = require('express')
const app = express()

app.get('/getCitas', async(req, res) => {
    await citaModel.find({ idUsuario: req.query.idUsuario })
        .exec((err, citas) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            return res.status(200).json({
                ok: true,
                status: 200,
                count: citas.length,
                citas
            })
        })
})


app.post('/nuevaCita', async(req, res) => {
    try {
        let cita = new citaModel(req.body);
        let citaRegistrada = await cita.save();
        return res.status(200).json({
            ok: true,
            resp: 200,
            msg: 'Se ha registrado la cita exitosamente.',
            cont: {
                citaRegistrada
            }
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            resp: 500,
            msg: 'Error al intentar registrar la cita.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
});

app.put('/updateCita', async(req, res) => {
    try {
        let citaBody = new citaModel(req.body);
        let err = citaBody.validateSync();
        if (err) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'Error de validación.',
                cont: {
                    err: Object.keys(err).length === 0 ? err.message : err
                }
            });
        }
        let { strNombre, strPersonaVisitante, strHora, dteFechaInicio, strDescripcion, strPersonaUtags, dteFechaFin } = citaBody;
        let cita = await citaModel.findByIdAndUpdate(citaBody._id, { $set: { strNombre, strPersonaVisitante, strHora, dteFechaInicio, strDescripcion, strPersonaUtags, dteFechaFin } }, { new: true });

        if (!cita) {
            return res.status(404).json({
                ok: false,
                resp: 404,
                msg: 'La cita que deseas modificar no existe.',
                cont: {
                    cita
                }
            });
        }
        return res.status(200).json({
            ok: true,
            resp: 200,
            msg: 'Se ha actualizado la cita exitosamente.',
            cont: {
                cita
            }
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            resp: 500,
            msg: 'Error al intentar actualizar la cita.',
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
});

app.delete('/desactivarCita', async(req, res) => {
    const idCita = req.query.idCita;
    const blnActivo = req.query.blnActivo;
    try {
        if (!idCita || idCita.length < 24) {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'No se recibió un identificador válido.',
                cont: {
                    idCita: idCita | null
                }
            });
        }
        if (blnActivo != 'false' && blnActivo != 'true') {
            return res.status(400).json({
                ok: false,
                resp: 400,
                msg: 'No se recibió un valor booleano en el parámetro blnActivo.',
                cont: {
                    blnActivo: blnActivo || null
                }
            });
        }
        const cita = await citaModel.findByIdAndUpdate(idCita, { $set: { blnActivo } }, { new: true });
        if (!cita) {
            return res.status(404).json({
                ok: false,
                resp: 404,
                msg: `La cita que deseas ${blnActivo === 'true' ? 'activar' : 'desactivar'} no existe.`,
                cont: {
                    cita
                }
            });
        }
        return res.status(200).json({
            ok: true,
            resp: 200,
            msg: `Se ha ${blnActivo === 'true' ? 'activado' : 'desactivado'} la cita exitosamente.`,
            cont: {
                cita
            }
        });
    } catch (err) {
        return res.status(500).json({
            ok: false,
            resp: 500,
            msg: `Error al intentar ${blnActivo === 'true' ? 'activar' : 'desactivar'} la cita.`,
            cont: {
                err: Object.keys(err).length === 0 ? err.message : err
            }
        });
    }
});

module.exports = app