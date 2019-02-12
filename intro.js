module.exports = {
    story: function(personaje, lugar, edad) {
        if(edad > 18 && edad < 80) {
            return personaje + 'vivia una triste existencia. Llevaba ' + edad + ' en este mundo y nunca habia podido salir de ' + lugar
        } else if (edad > 80) {
            return 'Despues de viajar por ' + edad + ". " + personaje + 'habia encontrado que el secreto de la felicidad es tener una vaca mascota'
        } else {
            return "habia una vez un niño que se llamaba " + personaje + " y el vivia en " + lugar        
            }
    }
}


