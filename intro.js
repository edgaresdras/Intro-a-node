module.exports = {
    story: function(personaje, edad, villano, lugar, hobby, nuevohobby) {
        if(edad > 18 && edad < 80) {
            return personaje + ' vivia muy triste en ' + lugar + ' desde hace ' + edad + ' años y solo sabia ' + hobby + ' fue hasta que conocio a ' + villano + ' que aprendio a ' + nuevohobby + '. ';
        } else if (edad > 80) {
            return personaje + ' vivia despreocupadamente en ' + lugar + ' desde hace ' + edad + ' años y solo sabia ' + hobby + ' fue hasta que conocio a ' + villano + ' que aprendio a ' + nuevohobby + '. '; 
        } else {
            return personaje + ' vivia en ' + lugar + ' desde hace ' + edad + ' años y solo sabia ' + hobby + ' fue hasta que conocio a ' + villano + ' que aprendio a ' + nuevohobby + '. ';
        }
    }
}


