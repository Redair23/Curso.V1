/*

for in -----> objectos

propiedades = valor;

array, string

item

for(variable in objecto){
    codigo 
}

*/

const datos = {
    nombre:'Deiber',
    edad:23,
    cc:1000973125,
    sexo: 'Maaculino'

}

for (deiber in datos){
    console.log(deiber);
}

for (deiber in datos){
    console.log(`${deiber}: ${datos[deiber]}`);
}

for (deiber of datos){
    console.log(deiber);
}