"use strict";
exports.__esModule = true;
var Cavalo_1 = require("./Cavalo");
var Cachorro_1 = require("./Cachorro");
var Preguica_1 = require("./Preguica");
var cavalo = new Cavalo_1.Cavalo('Ronaldo', 5, true);
var cachorro = new Cachorro_1.Cachorro('Robson', 5, true);
var preguica = new Preguica_1.Preguica('ligeirinho', 5, true);
function emitirsom(Animal) {
    Animal.emitirSom();
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
