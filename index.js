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

console.log(intro.story(personaje, edad, villano, lugar, hobby, nuevohobby));
console.log(final.story(personaje, villano, lugar, edad, hobby, nuevohobby));

console.log(cowsay.say({
    text : "Soy pirata",
    e : "x-0",
    T : "v "
 }));   

