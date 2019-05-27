const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

const ArmazemSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    }
});

ArmazemSchema.plugin(mongoosePaginate);

mongoose.model('Armazem', ArmazemSchema);