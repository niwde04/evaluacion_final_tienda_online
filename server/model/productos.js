const mongoose = require('mongoose')
const	eventSchema = new mongoose.Schema({

_id: Number,
descripcion: String,
urlImagen: String,
precio: Number,
unidadesDisponibles: Number

})


const Productos = mongoose.model('Productos', eventSchema);

module.exports = Productos;
