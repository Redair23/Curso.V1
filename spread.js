//spread()
//1.Copying an Array

const originalArray  =[1,2,3,4,5,6]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

//2. Combinig Arrays

const array1 =[1,2,3,4,5,6]
const array2 = [7,8,9,10]
const combinedArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//crear arrays con elementos adicionales

const baseArray = [1,2,3,4,5]
const arrayWithAddElements = [...baseArray,6,7,8,9,10]

console.log(baseArray)
console.log(arrayWithAddElements)

//Pasar elementos a una funcion

function suma (a,b,c){
    return a + b + c

}

const numbers = [1,2,3]
const result = suma(...numbers)
console.log(result)
