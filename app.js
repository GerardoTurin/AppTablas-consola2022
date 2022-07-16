
import argv from './config/yargs.js';
import { crearMultiplicar } from './helpers/multiplicar.js';
import colors from 'colors';


const { tabla, listar, hasta } = argv;

crearMultiplicar(tabla, listar, hasta)
    .then(tabla => console.log(colors.yellow(tabla, 'Tabla Creada...')))
    .catch(err => console.log(err));








