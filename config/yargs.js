import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';



const argv = yargs(hideBin(process.argv))
    .option('t', {
        alias: 'tabla',
        type: 'number',
        demandOption: true,
        description: 'Tabla a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Listar las tablas de multiplicar en un archivo y consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        description: 'Hasta que numero multiplicar en la tabla'
    })
    .check( (argv, options) => {
        if (isNaN(argv.tabla)) {
            throw new Error('El valor debe ser un numero');
        }
        return true;
    })
    .argv;


export default argv;