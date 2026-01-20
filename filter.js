//filter()

const numbers = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers  = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

//reduce() caso 1

const numbersReduce = [1,2,3,4,5]

const suma = numbersReduce.reduce((accumulator,currentValue)=>accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(suma)

//reduce() caso 2

const words = ['apple','bye','hello','mango','bye','deiber','bye']

const wordFrecuency = words.reduce((accumulator,currentValue)=>{

    if (accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator
},{})

console.log(wordFrecuency)
