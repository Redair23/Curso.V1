const globalVariable = 'Happy'

function localOne (){
    console.log('Global 1 :', globalVariable)

    function localTwo(){
        const carrot = 'Zanahoria'
        console.log('Local 2 :', carrot)
    }
    
    function localThree (){
        console.log('local 3 :', carrot)
    }

    localTwo()
    localThree()

}

console.log(localOne())