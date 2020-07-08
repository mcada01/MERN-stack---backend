const express = require('express'); //modulo que permite crear un servidor
const cors = require('cors');
const app = express();

// settings
//app.set('port', process.env.PORT || 4000);
app.set('port', 4000);

// middlewares 
app.use(cors()); //intercambio de datos entre servidores
app.use(express.json()); //para que el servidor entienda archivos json

// routes
//app.get('/api/users',(req, res) => res.send('Users Routes'))
//app.get('/api/notes',(req, res) => res.send('Notes Routes'))
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app; //lo exportamos