const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5,listar,hasta) => {

    
    try {
        if(listar){
            console.log(colors.america("==================="));
            console.log("   "+colors.bold("Tabla del:"),colors.green(base));
            console.log(colors.america("==================="));
        }
        
    
        let salida = '';
    
        for (let index = 1; index <= hasta; index++) {
            salida += "   " + colors.blue(base) + colors.yellow.bold(" x ") + colors.cyan(index) + colors.red(" = ") + base*index + "\n";
        }
        
        (listar) && console.log(salida)
    
        fs.writeFileSync(`tabla-de-${base}.txt`,salida);
        return `tabla-de-${base}.txt`;
    } catch (error) {
        throw error
    }

}


module.exports = {
    crearArchivo: crearArchivo
}