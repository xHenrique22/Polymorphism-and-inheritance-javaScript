import {Animal} from './Animal';
import {ISom} from './iSom';
import {ICorrer} from './iCorrer';

class Cavalo extends Animal implements ISom, ICorrer {
   public corre: boolean;

   constructor(nome: string, idade: number, corre: boolean){
      super(nome, idade);
      this.corre = corre;
   }

   public Som(): void {
       console.log(`${this.nome} relinchando`);
   }

   public correr(): void{
      console.log(`${this.nome} começou a correr`);
   }
}
export { Cavalo };