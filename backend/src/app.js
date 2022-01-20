"use strict";

// Cargar modulos de node para crear el servidor
var express = require("express");
const bodyParser = require("body-parser");

// Ejecutar express (http)
var app = express();

// Cargar fichero rutas
const userRoutes = require("./routes/userRoutes");
const userRoutes = require("./routes/ticketRoutes");

// Middlewares (se ejecuta antes de cargar alguna ruta)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "5mb" }));

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use("/user", userRoutes);
app.use("/ticket", ticketRoutes);

// Exportar modulo (fichero actual)
module.exports = app;