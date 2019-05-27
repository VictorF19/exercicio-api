const express = require('express');
const routes = express.Router();
const ArmazemController = require('./controllers/ArmazemController');

routes.get('/armazem', ArmazemController.ListarTodos);
routes.get('/armazem/:id', ArmazemController.ListarArmazem);
routes.get('/armazem/codigo/:codigo', ArmazemController.ListarArmazemQuery);
routes.post('/armazem', ArmazemController.Incluir);
routes.put('/armazem/:id', ArmazemController.Alterar);
routes.delete('/armazem/:id', ArmazemController.Excluir);

module.exports = routes;