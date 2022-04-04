const mongoose = require('mongoose');
const { Schema } = mongoose;

//Creación del esquema de usuarios
const users = new Schema({
    strName: {
        type: String,
        required: [true, 'Favor de ingresar el nombre ']
    },
    strLastName: {
        type: String,
        required: [true, 'Favor de ingresar el primer apellido ']
    },
    strMotherLastName: {
        type: String

    },
    strEmail: {
        type: String,
        required: [true, 'Favor de ingresar el correo ']
    },
    strPassword: {
        type: String,
        required: [true, 'Favor de ingresar la contraseña ']
    },
    blnStatus: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});



module.exports = mongoose.model('User', users);