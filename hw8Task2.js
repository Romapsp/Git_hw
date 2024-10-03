const words = [
    'umbrella', 
    'apple', 
    'ocean',
    'independent',
    'education',
    'elephant', 
    'island',
    'universe',
    'environment',
    'queue',
    'tst'
]
const vowels = ['a', 'e', 'i', 'o', 'u'];
newArray = []
newArray2 = []

function countVowels(word) {
    return word.split('').filter(char => vowels.includes(char.toLowerCase())).length;
}

function sortArray(array) {
    for (const word of array) {
        if (vowels.some(vowel => word.includes(vowel))) {
            newArray.push(word);
        }
    }

    newArray2 = newArray.sort((a, b) => {
        return countVowels(a) - countVowels(b)
    })
    return newArray2
}


console.log(sortArray(words))