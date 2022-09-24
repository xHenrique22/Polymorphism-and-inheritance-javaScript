import { Animal } from "./Animal";
import { ISom } from "./iSom";
import { ISubirArvores } from "./iSubir";

class Preguica extends Animal implements ISom, ISubirArvores{
   public subirArvore: boolean;

   constructor(nome: string, idade: number, subirArvore: boolean){
      super(nome, idade);
      this.subirArvore = this.subirArvore;
   }
   public Som(): void {
      console.log(`${this.nome} zZz`);
  }
  public subirArvores(): void {
      console.log(`${this.nome} começou a subir na arvore`);
  }
}
export{ Preguica };