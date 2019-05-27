const mongoose = require('mongoose');
const axios = require('axios');

const Produto = mongoose.model('Produto');

module.exports = {
    async Incluir(req, res) {
       
        URL = `http://localhost:3000/api/armazem/codigo/${req.body.armazem}`;
        const armazemResponse = await axios.get(URL);
        const armazem = armazemResponse.data[0];

        req.body.armazem = armazem.descricao;

        const produto = await Produto.create(req.body);

        return res.json(produto);
    },

    async ListarTodos(req, res) {
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({}, { page, limit: 10});

        if(produtos.length === 0)
        {
            return res.status(204).send();
        }

        return res.json(produtos);
    },

    async ListarProduto(req, res) {
        const produtos = await Produto.findById(req.params.id);

        return res.json(produtos);
    },

    async Excluir(req, res) {

        await Produto.findByIdAndDelete(req.params.id);

        res.send();
    },

    async Alterar(req, res) {
        const produtoAlterado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(produtoAlterado);
    }
}