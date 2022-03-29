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
    dteFecha: {
        type: Date,
        required: [true, 'Porfavor ingrese la fecha']
    },
    /*
    dteHoraInicio: {
        type: Date,
        required: [true, 'Porfavor ingrese la hora inicio']
    },
    dteHoraFin: {
        type: Date,
        required: [true, 'Porfavor ingrese la hora fin']
    },*/
    blnActivo: {
        type: Boolean,
        default: true
    },
    //aJsnRol: [RolModel.schema]
});
//crea una coleccion
module.exports = mongoose.model('cita', citaSchema);