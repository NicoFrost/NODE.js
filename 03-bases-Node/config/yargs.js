const { option } = require('yargs');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true,
                    default: 5,
                    describe: 'base por la que multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'hasta donde queres que vaya la tabla'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero';
                    };
                    if(isNaN(argv.h)) {
                        throw 'el Limite tiene que ser un numero'
                    };
                    if(argv.h >= 1000) {
                        throw 'PARA..., es demasiado grande, usa una calculadora'
                    }
                    return true;                    
                })
                .argv;

module.exports = argv