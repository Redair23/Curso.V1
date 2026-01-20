/*

Requirimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el ususario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectas, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline..,

*/

const userDataBase = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana',
        password: '789'
    },
];
const usersTimeLine = [
    {
        username:'Estefany',
        timeLine: 'Me encanta js'
    },
    {
        username: 'Oscar',
        timeLine: 'BeberLope es lo mejor'
    },
    {
        username: 'Mariana',
        timeLine: 'Yo hoy no quiero trabajar'
    }
];

const username = prompt('Ingrese su usuarios:');
const password  = prompt('ingrese su contraseña');

function usuarioExistente(username,password){
    for(let i = 0; i < userDataBase.length; i++){
        if(
            userDataBase[i].username === username &&
            userDataBase[i].password === password
        ){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if(
        usuarioExistente(username,password)){
            alert(`Bienvenido a tu cuenta ${username}`);
            console.log(usersTimeLine)
        } else {
            alert('Upss, Usuario o Contraseña incorrectos:')
        }

}
signIn(username,password);