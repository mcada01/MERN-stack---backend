const {Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: { //definición de columnas requeridas
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true //automaticamente pone fecha de creación y actualización
});

// al crear el modelo se crea en mongodb una coleccion llamada notes
module.exports = model('Note', noteSchema);