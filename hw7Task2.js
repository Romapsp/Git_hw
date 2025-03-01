function isPalindrome(word) {

    const normalizedWord = word.toLowerCase();
    
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    return normalizedWord === reversedWord;
}

console.log(isPalindrome('madam'))
console.log(isPalindrome('hello'))
console.log(isPalindrome('Racecar'))

function longestWords(sentence) {
    const words = sentence.split(' ')
    let maxLength = 0;
    let longestWords = [];

    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length
            longestWords = [word]
        } else if (word.length === maxLength) {
            longestWords.push(word)
        }
    }

    return longestWords;
}

console.log(longestWords('I am super engineer and coder'))
console.log(longestWords('I love coding and programming and depgramming'))