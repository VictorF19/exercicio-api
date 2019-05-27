const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    unidade: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    armazem: {
        type: String,
        required: true
    },    
})

ProdutoSchema.plugin(mongoosePaginate);

mongoose.model('Produto', ProdutoSchema);