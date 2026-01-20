
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`hola, mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
    }
}

const persona1 = new Persona ('Deiber', 23);

persona1.saludar();