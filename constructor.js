const persona = {
    nombre: 'Deiber',
    apellido: 'Martinez Castillo'

}

function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

}

const persona1 = new Persona('juan','Perez', 30);
console.log(persona1);

const persona2 = new Persona('felipe','lozano',22);

console.log(persona2);

Persona.prototype.telefono = 3114712194;

const persona3 = new Persona ('Samuel', 'Pulido', 19, 3133891281);

console.log(persona3);

persona1.nacionalidad = 'Colombiano';

Persona.prototype.saludar  = function(){
    console.log(`hola me llamo : ${this.nombre} ${this.apellido}`);
};

persona1.saludar();
persona2.saludar();