const express = require('express');
const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');

routes.post('/produto', ProdutoController.Incluir);
routes.get('/produto', ProdutoController.ListarTodos);
routes.get('/produto/:id', ProdutoController.ListarProduto);
routes.delete('/produto/:id', ProdutoController.Excluir);
routes.put('/produto/:id', ProdutoController.Alterar);

module.exports = routes;