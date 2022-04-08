//exportaciones
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')

app.use(fileUpload());

// Habilita CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, aa_token'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});


//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //url amistosa, captura los datos del formulario
//Parse de formato a application/json
app.use(bodyParser.json());
//Archivo agrupador de rutas
app.use('/api', require('./routes/index'));

//useNewUrlParser 
//Conexión a la BD
mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

//Puerto de escucha de la aplicación
app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto ', process.env.PORT);
});