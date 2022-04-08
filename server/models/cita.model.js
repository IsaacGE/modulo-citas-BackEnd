const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

//declarar esquema
let Schema = mongoose.Schema;

let citaSchema = new Schema({
    strNombre: {
        type: String,
        required: [true, 'Por favor ingresa el nombre de la cita']
    },
    strDescripcion: {
        type: String,
        required: [true, 'Por favor ingresa la descripción']
    },
    strPersonaVisitante: {
        type: String,
        required: [true, 'Por favor ingresa persona Visitante']
    },
    strPersonaUtags: {
        type: String,
        required: [true, 'Porfavor ingrese Persona Utags']
    },
    strHora: {
        type: String,
        required: [true, 'Porfavor ingrese la hora']
    },
    dteFechaInicio: {
        type: Date,
        required: [true, 'Porfavor ingrese la fecha inicio']
    },
    dteFechaFin: {
        type: Date,
        required: [true, 'Porfavor ingrese la fecha fin']
    },
    blnActivo: {
        type: Boolean,
        default: true
    },
},
{
    versionKey: false
}
);
module.exports = mongoose.model('cita', citaSchema);