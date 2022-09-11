import FileUtil from "./service/FileUtil.js";
import ArmarListaCajas from "./service/ArmarListadoCajas.js";

let file = new FileUtil("./resource/cajas.json");
let lista = new ArmarListaCajas(JSON.parse(file.read()));

let cajasConDiferencias = lista.comprobarDiferencias();

console.log("cajas con diferencias..")
console.log(cajasConDiferencias);

file.write("./resource/cajasConDiferencias.json", cajasConDiferencias)


