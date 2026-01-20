/*
switch(expresion){
    case valor1:
        //Codigo a ejecutar 
        break;
    case valor2:
        //codigo a ejecutar
        break;
    case valor1:
        //Codigo a ejecutar 
        break;
    case valor2:
        //codigo a ejecutar
        break;
    default:
        //Codigo a ejecutar
}
*/

let frutaDeseada = prompt('Ingrese la fruta deseada');

switch (frutaDeseada){
    case 'manzanas':
        console.log('las manzanas cuestan $2.000 unidad');
        break;
    case 'peras':
        console.log('las peras cuestan $1.500 la unidad')
        break;
    case 'duraznos':
        console.log('los duraznos cuestan $2.500 unidad');
        break;
    case 'mangos':
    case 'uvas':
        console.log('los mangos y las uvas cuestan $1.000 la unidad')
        break;
    default:
        console.log(`la fruta ${frutaDeseada} no esta disponible, ingrese otra fruta!!! `)
}

console.log('Deseas algo mas ?');