const mongoose = require('mongoose');

const Armazem = mongoose.model('Armazem');

module.exports = {

    async ListarTodos(req, res) {
        const { page = 1 } = req.query;
        const armazens = await Armazem.paginate({/* where... */}, {page, limit: 10});

        if(armazens.length === 0)
        {
            return res.status(204).send();
        }

        return res.json(armazens);
    },

    async ListarArmazem(req, res) {
        const armazem = await Armazem.findById(req.params.id);

        //incluir validação para id informado não existe no banco

        return res.json(armazem);
    },

    async ListarArmazemQuery(req, res) {
        const armazem = await Armazem.find({codigo: req.params.codigo})

        return res.json(armazem);
    },

    async Incluir(req, res) {
        const armazem = await Armazem.create(req.body);

        return res.json(armazem);
    },

    async Alterar(req, res) {
        
        const armazemAlterado = await Armazem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        //incluir validação para id informado não existe no banco
        
        return res.json(armazemAlterado);
    },

    async Excluir(req, res) {
        await Armazem.findByIdAndDelete(req.params.id);
        
        //incluir validação para id informado não existe no banco

        return res.send(); 
    }
}