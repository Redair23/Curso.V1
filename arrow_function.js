const saludo = function (name){
    return `Hi, ${name}`

}
// Arrow function - explicit return

const newGretting = (name)=>{
    return `Hi, ${name}`
}

// Arrow function - implicit return

const newGrettingImplicit = name => `Hi, ${name}`
const newGrettingImplicitWithTwoParameters = (name, lastName) => `Hi, i'm${name} ${lastName}`

//Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWhithTradicionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWhithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWhithTradicionalFunction('With great power comes great responsability.')
finctionalCharacter.messageWhithArrowFunction('Bewere of Doctor Octopus')