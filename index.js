const cowsay = require('cowsay');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

const personaje = "Moi";
const edad = Math.round(Math.random()*100);
const villano = "Diego";
const lugar = "Centro historico";
const hobby = "Andar en bici";
const nuevohobby = "programar";

// let nombre = "Cowgirl";
// let frase1 = "comiendo pasto electronico";
// let frase2 = " y tal vez unos cuantos bytes";
// let story = "Hola, mi nombre es " + nombre + ". Y hoy estare " + frase1 + frase2; 

console.log(intro.story(personaje, edad, villano, lugar, hobby, nuevohobby));
console.log(cowsay.say({
    text : "Soy pirata",
    e : "x-0",
    T : "v "
 }));   


console.log('Hola');
console.log('soy un archivo de js');
console.log(8+9);