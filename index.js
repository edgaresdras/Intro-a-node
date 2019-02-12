const cowsay = require('cowsay');
const fs = require('fs');
const intro = require('./intro');
const nudo = require('./nudo');
const final = require('./final');

const edad = Math.round(Math.random()*100);
const villano = "Diego";
const lugar = "Centro historico";
const hobby = "Andar en bici";
const nuevohobby = "programar";

fs.readFile('personajes.txt', 'UTF-8', function(err, personajes){
    if (err) {
        throw err;
    } //validacion clasica

    // (err) ? console.log(err) : console.log(personajes) //operador ternario como el if pero en una linea
    
    personajes = personajes.split(',');

    let personajesRandom = Math.floor(Math.random() * personajes.length);
    console.log(personajes[personajesRandom]);

    let personaje = personajes[personajesRandom];
    
    //console.log(personajes);

    console.log(intro.story(personaje, edad, villano, lugar, hobby, nuevohobby));
    console.log(final.story(personaje, villano, lugar, edad, hobby, nuevohobby));

    const introHistoria = intro.story(personaje, edad, villano, lugar, hobby, nuevohobby);
    const finalHistoria = final.story(personaje, villano, lugar, edad, hobby, nuevohobby);

    let fullHistoria = introHistoria + finalHistoria;


    fs.writeFile('historia.txt', fullHistoria, function(err) {
        if (err) {
            throw err;
        }
    });

});


// let nombre = "Cowgirl";
// let frase1 = "comiendo pasto electronico";
// let frase2 = " y tal vez unos cuantos bytes";
// let story = "Hola, mi nombre es " + nombre + ". Y hoy estare " + frase1 + frase2; 


console.log(cowsay.say({
    text : "Soy pirata",
    e : "x-0",
    T : "v "
 }));   


console.log('Hola');
console.log('soy un archivo de js');
console.log(8+9);