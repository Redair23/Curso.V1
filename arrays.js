//  How to create an Array?

//1. New Arrays() or Arrays()

const fruits = Array('Apple','Banana','Orange')
console.log(fruits) 

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5,6,7)
console.log(number)

//2.Array literal Syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArrays = []
console.log(emptyArrays)

const sport = ['Soccer','Tennis','Rugby']
console.log(sport)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient:'Milk',
        quantity:'1 Cup'
    },
    false
]
console.log(recipeIngredients)

//Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

//length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

//Mutability

fruits.push('Wathermelon')
console.log(fruits)

//Inmutability

const newFruits = fruits.concat('Grape','Kiwi')
console.log(fruits)
console.log(newFruits)

//Ckecking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

//Practical exercise: sum all elements of an array.

const numbersArrays = [1,2,3,4,5]
let sum = 0

for(let i = 0; i <numbersArrays.length; i++){
    sum += numbersArrays[i]
}
console.log(sum)