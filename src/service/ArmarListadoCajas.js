import Cajas from "./../models/Cajas.js";
class ArmarListadoCajas {

    constructor(listaDatos){
        this.listaDatos = listaDatos;
    }

    comprobarDiferencias(){
        let rta = this.listaDatos.filter(
            cajas => {   
                       const cajita = new Cajas (cajas.codigo, cajas.importe, cajas.valores, cajas.comprobantes);
                       return cajita.hayDiferencias();
                   }
           );       
   return rta;
    }
}

export default  ArmarListadoCajas;