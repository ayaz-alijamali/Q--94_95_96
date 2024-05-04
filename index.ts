// Question __________ 94


const words: string[] = ['apple', 'banana', 'orange', 'grape'];
const wordLengths: number[] = words.map(word => word.length);

console.log(wordLengths); // Output: [5, 6, 6, 5]


// Question ____________ 95


function numbersGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

const numbersArray: number[] = [5, 12, 8, 15, 3, 20];
const filteredNumbers: number[] = numbersGreaterThanTen(numbersArray);

console.log(filteredNumbers); // Output: [12, 15, 20]


// Question ___________96


const numbers: number[] = [1, 2, 3, 4, 5];
const sum: number = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
