'use strict';

const express = require('express');
const ticketRoutes = express.Router();
const ticketControllers = require('../controller/ticketController');

productRoutes.get('/tickets', ticketControllers.getAll);
productRoutes.post('/ticket', ticketControllers.create);

module.exports = productRoutes;