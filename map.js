//Map()

const numbers = [1,2,3,4,5]

const newNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(newNumbers)

//forEach()

const colores = ['Amarillo','Azul','Rojo']
const iteratedColors = colores.forEach(color => console.log(color))

console.log(colores)
console.log(iteratedColors)

//Ejercicio convertir de fahrenheit a Celsius

const temFahrenheit = [32,68,95,104,212]
const temCelcius = temFahrenheit.map(fahrenheit => (5/9) *(fahrenheit - 32))

console.log(temFahrenheit)
console.log(temCelcius)


//elevar un numero a su potencia 


const numeros = [2,3,4,5,6,7]

const numElevados = numeros.map(num => num * num)

console.log(numElevados)

//Sumar los elementos de un arrays

const newNumber = [1,2,3,4,5]

let sum= 0

newNumber.forEach(number => {
    sum += number
})

console.log('Numeros del Arrays :' + ' '+ newNumber)
console.log('La suma de los numeros del arrays es :'+ '' + sum)
