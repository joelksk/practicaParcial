import fs from 'fs';

class FileUtil {

    constructor(archivo){
        this.archivo = archivo;
    }

    read() {
        try {
            return fs.readFileSync(this.archivo, 'utf-8');
        }
        catch (e) {
            console.log(e);
            throw 'no se pudo encontrar el archivo';
        }
    }
    
    write(rutaArchivo,objetoJson) {
        try {
            return fs.writeFileSync(rutaArchivo,JSON.stringify(objetoJson))
        }
        catch (e) {
            console.log(e);
            throw 'hubo un problema al escribir el archivo';
        }
    }
}

export default FileUtil;