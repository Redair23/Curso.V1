
//Funciones Puras

//Side effects
//1. Modificar variables globales
//2. Modificar Parametros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola.
//5. Manipulacion del DOM
//6. Obtener la hora actual.

function suma (a,b){
    return a + b 
}

//Funciones Impuras
function suma (a,b){
    console.log('A:' + a)
    return a + b 
}

let total = 0 


function sumWhitchSideEffect (a){
    total += a
    return total
}

function square(x){
    return x * x 
}

function addTen (y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)