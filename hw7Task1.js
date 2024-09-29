
// function showArgs(...arguments) {
//     const result = []
//     for (const arg of arguments){
//         result.push(...arg)
//     }
//     console.log(result)
// }

// showArgs([1, 2],[3, 4], [5, 6])

function derive(text) {
    let result = text.replaceAll(' ', '_')  
    let finalResult = ''  

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '_') {
            finalResult += '_'
            if (i + 1 < result.length) {
                finalResult += result[i + 1].toUpperCase()
                i++ 
            }
        } else {
            finalResult += result[i]
        }
    }

    return finalResult[0].toLowerCase() + finalResult.slice(1)
}

console.log(derive('I am super Engineer'))


function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8))