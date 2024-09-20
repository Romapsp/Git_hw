


let min = 1;
let max = 100;

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
if (randomNumber % 3 == 0 && randomNumber % 5 == 0){
    console.log('число делится и на 3, и на 5')
} else if (randomNumber % 5 == 0) {
    console.log('число делится на 5')
} else if  (randomNumber % 3 == 0)  {
    console.log('число делится на 3')
}