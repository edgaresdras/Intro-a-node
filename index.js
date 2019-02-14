// Modulos
const cowsay = require('cowsay');
const fs = require ('fs'); // File system nativo de nodejs
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

// Variable de generacion
const personaje = "Moi";
const edad = Math.round(Math.random()*100);
const villano = "Diego";
const lugar = "Centro historico";
const hobby = "Andar en bici";
const nuevohobby = "programar";

fs.readFile('personajes.txt', 'utf-8', function(err, contenido) {
    if(err) {
        throw err;
    }
    const personajes = contenido.split(',');
    const numeroPersonaje = Math.floor(Math.random() * personajes.length);
    const personajeRandom = personajes[numeroPersonaje];
    const historiaCompleta = juntarHistoria(personajeRandom);
    // Ver historia
    console.log(historiaCompleta);

    fs.writeFile('historia.txt', historiaCompleta, function(err) {
        if (err) {
            throw err;
        }
    });
    
});

// let nombre = "Cowgirl";
// let frase1 = "comiendo pasto electronico";
// let frase2 = " y tal vez unos cuantos bytes";
// let story = "Hola, mi nombre es " + nombre + ". Y hoy estare " + frase1 + frase2; 
 
// muchasPalabras // camel case
// muchasPalabras // dash case
// muchasPalabras // dash case

// Partes de historia
function juntarHistoria(personaje) {
    const introHistoria = intro.story(personaje, edad, villano, lugar, hobby, nuevohobby);
    const finalHistoria = final.story(personaje, edad, villano, lugar, hobby, nuevohobby);
    const historiaCompleta = introHistoria + finalHistoria;
    return historiaCompleta;
}

console.log(cowsay.say({
    text : "Soy pirata",
    e : "x-0",
    T : "v "
 }));   


console.log('Hola');
console.log('soy un archivo de js');
console.log(8+9);