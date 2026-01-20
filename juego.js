const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt('Adivina el numero secreto entre el 1 al 10'));

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if ( numeroJugador===numeroSecreto){
    console.log('Ha adivinado el nunmero, felicitaciones !!!')
} else if (numeroJugador < numeroSecreto ){
    console.log('El numero es demaciado bajo, intenta nuevamente')
}else {
    console.log('El numero es muy alto, intente nuevamente');
}7