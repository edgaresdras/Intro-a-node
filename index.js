const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

const personaje = "anuar";
const edad = Math.round(Math.random()*100);
const villano = "juan";
const lugar = "centraal";
const hobby = "programar";

// let nombre = "Cowgirl";
// let frase1 = "comiendo pasto electronico";
// let frase2 = " y tal vez unos cuantos bytes";
// let story = "Hola, mi nombre es " + nombre + ". Y hoy estare " + frase1 + frase2; 

console.log(intro.story(personaje, lugar, edad));
console.log(intro.story(personaje, villano, lugar, edad, hobby, nuevohobby));

console.log(cowsay.say({
    text : "Soy pirata",
    e : "x-0",
    T : "v "
 }));   


console.log('Hola');
console.log('soy un archivo de js');
console.log(8+9);