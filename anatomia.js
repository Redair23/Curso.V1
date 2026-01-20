/* 
Estructura de datos


objecto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor

    metodos()
}

*/


const persona =  {
    nombre: 'Deiber',
    edad: 23,
    direccion: {
        calle: 'Calle 53 sur · 35 - 04',
        ciudad: 'Villavicencio',
    },
    saludar(){
        console.log(`Hola, mi nombre es: ${persona.nombre}`)
    },

};

console.log(persona)
persona.saludar();

// Agredar propiedades a objectos

persona.telefono = 3114712194;

console.log(persona.telefono);
console.log(persona)

persona.despedir = () =>{
    console.log('Adios !!!')
};

persona.despedir();


//Eliminar propiedades delete

delete persona.telefono;
delete persona.despedir;