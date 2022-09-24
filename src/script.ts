import { Animal } from "./Animal";
import { Cavalo } from "./Cavalo";
import { Cachorro } from "./Cachorro";
import { Preguica } from "./Preguica";
import { ICorrer } from "./iCorrer";
import { ISom } from "./iSom";
import { ISubirArvores } from "./iSubir";

const cavalo: Cavalo = new Cavalo('Juninho', 5, true);
const cachorro: Cachorro = new Cachorro('Mayquin', 5, true);
const preguica: Preguica = new Preguica('Trombadinha', 5, true);

function emitirsom(Animal: ISom){
   Animal.Som();
}
function correr(Animal: ICorrer){
   Animal.correr();
}
function subirArvore(Animal: ISubirArvores){
   Animal.subirArvores();
}

emitirsom(cavalo);
correr(cavalo);
console.log();

emitirsom(cachorro);
correr(cachorro);
console.log();

emitirsom(preguica);
subirArvore(preguica);