// TASK ONE

const arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(const number of arrayOne) {
    if (number % 2 === 0){
        const squareNumber = number * number 
        // console.log(squareNumber)
    } else if (number % 2 === 1) {
        const degreeNumber = number * number * number 
        // console.log(degreeNumber)
    }
}

// TASK TWO

const arrayTwo = [1, 2, 3, 4, 5]
arrayTwo.push(6)
arrayTwo.unshift(0)
arrayTwo.splice(2,1)
arrayTwo.pop()
console.log(arrayTwo) 

// TASK THREE
const arrayThree = [0, 1, 2, 999, 1000]

const [first, second, ...rest] = arrayThree

console.log(first, second, rest)

// TASK FOUR
const arrayFourFirst = [1, 2, 3, 4, 5]
const arrayFourSecond = [6, 7, 8, 9, 10]

const mergedArray = [...arrayFourFirst, ...arrayFourSecond]

console.log(mergedArray)



