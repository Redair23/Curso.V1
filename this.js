/*

this ----- class

this -------- objecto ------- class

*/

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1  = new Persona ('Alice', 27)
console.log(persona1);

persona1.newMetodo = function(){
    console.log(`mi nombres es ${this.nombre}`)
}