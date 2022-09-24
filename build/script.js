"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cavalo_1 = require("./Cavalo");
var Cachorro_1 = require("./Cachorro");
var Preguica_1 = require("./Preguica");
var cavalo = new Cavalo_1.Cavalo('Juninho', 5, true);
var cachorro = new Cachorro_1.Cachorro('Mayquin', 5, true);
var preguica = new Preguica_1.Preguica('Trombadinha', 5, true);
function emitirsom(Animal) {
    Animal.Som();
}
function correr(Animal) {
    Animal.correr();
}
function subirArvore(Animal) {
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
