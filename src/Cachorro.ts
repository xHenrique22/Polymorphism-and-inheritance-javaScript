import { Animal } from "./Animal";
import { ICorrer } from "./iCorrer";
import { ISom } from "./iSom";

class Cachorro extends Animal implements ISom, ICorrer {
   public corre: boolean;

   constructor(nome: string, idade: number, corre: boolean){
      super(nome, idade);
      this.corre = corre;
   }

   public Som(): void {
       console.log(`${this.nome} late`);
   }

   public correr(): void {
       console.log(`${this.nome} começou a correr`);
   }
}
export { Cachorro };