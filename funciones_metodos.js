
//Capacidades que tienen las funciones al igual que otros metoodos

//1. Pasar funciones como argumentos -> callback
/*
function a (){
    function b (){}
    return b 

}

// 2. Asignar funciones a variables (Expresion de funcion)

const a  = function (){}

// Tener propiedades y metodos 

function a  (){}
const obj = {}
a.call(obj)

//Anidar Funciones -> Nested Functions

function a (){
    function b (){
        function c (){
            

    }
    c()
}
b()
}
a()

// Es posible almacenar funciones en objectos?
*/
const rocket = {
    nombre: 'Redair23',
    launchMessage: function launchMessage () {
        console.log('GO TO SPACE')
    }
}

rocket.launchMessage()