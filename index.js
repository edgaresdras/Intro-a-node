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
