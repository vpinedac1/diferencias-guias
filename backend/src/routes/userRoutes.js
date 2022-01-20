'use strict';

const express = require('express');
const userRoutes = express.Router();
const userControllers = require('../controller/userController');
const authentication = require('../middlewares/authentication');

// GET para rutas
userRoutes.get('/', userControllers.get);
userRoutes.get('/registro', userControllers.getRegistro);
userRoutes.get('/login', userControllers.getLogin);
userRoutes.get('/logout', userControllers.logout);
userRoutes.get('/edit/:id', authentication.authorize, userControllers.getById);

// POST para rutas
userRoutes.post('/registro', userControllers.postRegistro);
userRoutes.post('/login', userControllers.postLogin);
userRoutes.post('/edit', authentication.authorize, userControllers.update);
userRoutes.post('/update/:id', authentication.authorize, userControllers.update);
userRoutes.post('/delete/:id', authentication.authorize, userControllers.delete);

module.exports = userRoutes;