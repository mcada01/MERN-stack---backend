require('dotenv').config(); //importa las variables del archivo .env antes de iniciar la app

const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port')); //asincrono, necesario async para que funcione await
    console.log('server on port', app.get('port'));
}

main(); //simulando funcion pricipal
//app.listen(4000, () => console.log('server on port 4000')); con funcion callback