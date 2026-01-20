/*
un objecto es una estructura de datos  que me ayuda a guardar valores de una forma particular keys / values (propiedad = valor)
objecto{
    propiedad :valor,
    propuedad2 :valor2,
    propiedad3 :valor
}
*/
/*
const persona = {
    nombre: 'deiber',
    edad: 23,
    sexo: 'Masculino',
    direccion: {
        calle: 'Calle 53 sur 35-04',
        ciudad: 'villavicencio'
    },
    saludar (){
        console.log(`hola mi nombre es ${persona.nombre}`)
    }
}
console.log(persona)
console.log(persona.saludar)
*/
let nombre = 'deiber'
function saludar (nombre){
    let saludo = `hola ${nombre} que tal todo?`;
    console.log(saludo);
}
saludar(nombre);
