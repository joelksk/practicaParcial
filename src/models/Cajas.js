class Cajas {

    constructor(codigo, importe, valores, comprobantes) {
        this.codigo = codigo;
        this.importe = importe;
        this.valores = valores;
        this.comprobantes = comprobantes;
    }

    sumarValores(){
        let suma = 0;
        this.valores.forEach(val => {
            suma += val;
        })
        return suma;
    }

    obtenerImporteCom(){
        let suma = this.comprobantes.reduce((valAnte, valDes) => valDes.tipo === 'I'?valAnte+valDes.importe:valAnte-valDes.importe,0);
       return suma;
    }

    hayDiferencias(){
        return this.sumarValores() != this.obtenerImporteCom();
    }
}

export default Cajas;