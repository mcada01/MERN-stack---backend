const {Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, //limpia el string permitiendo un solo espaciado entre palabras
        unique: true //garantizar campos unicos en la BD
    }
}, {
    timestamps: true //automaticamente pone fecha de creación y actualización
});

// al crear el modelo se crea en mongodb una coleccion llamada users
module.exports = model('User', userSchema);