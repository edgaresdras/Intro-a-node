module.exports = {
    story: function(personaje, edad, villano, lugar, hobby, nuevohobby) {
        if(edad > 18 && edad < 80) {
            return `Entonces cuando ${personaje} discutió con ${villano} mientras comían taquitos en ${lugar}, ${personaje} se dio cuenta que no era necesario que se dedicara a ${nuevohobby} porque siempre le había gustado ${hobby}.`;
        } else if (edad > 80) {
            return `Pero ${villano} era más astuto y convenció a ${personaje} de dedicarse a ${hobby} porque no podía perder a su rival porque a éste le gustaba ahora ${nuevohobby}.`;
        }
    }
}


