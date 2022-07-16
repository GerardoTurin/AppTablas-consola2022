import { writeFileSync } from 'fs';


const crearMultiplicar = async (tabla = 5, listar = false, hasta = 10) => {
    
    try {

        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += (` ${tabla} $x ${i} = ${tabla * i}\n`);
            consola += (` ${tabla} ${'x'.green} ${i} ${'='.green} ${tabla * i}\n`);
        }

        if (listar) {
            console.log('=================================='.green);
            console.log(`Tabla del ${tabla}`.green);
            console.log('=================================='.green);
            
            console.log(consola);
        }
        
        writeFileSync(`./salida/tabla-${tabla}.txt`, salida);
        console.log(`Archivo tabla-${tabla} creado`.green);

    } catch (error) {
        throw error;
    }
        
}

export { crearMultiplicar };


