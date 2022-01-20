'use strict'

const mongoose = require('mongoose');
const app = require('./src/app');
const environments = require('./src/env');

mongoose.Promise = global.Promise; //Buenas practicas para el buen funcionamiento de Mongoose
mongoose.connect(environments.database.conection, { useNewUrlParser: true })
    .then(() => {
        console.log('Conexion de base de datos OK');
        app.listen(environments.api.port, () => {
            console.log('Servidor corriendo en http://localhost: ' + port);
        });
    });