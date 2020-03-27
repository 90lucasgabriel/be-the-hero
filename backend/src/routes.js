const express = require('express');
const routes  = express.Router();

const SessionController  = require('./controllers/SessionController');
const OngController      = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController');

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

module.exports = routes;
