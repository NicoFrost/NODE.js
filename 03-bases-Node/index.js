const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear();


// console.log(argv);

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log('No se ha podido crear el archivo\n' + err))

