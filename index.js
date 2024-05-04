// Question __________ 94
const words = ['apple', 'banana', 'orange', 'grape'];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); // Output: [5, 6, 6, 5]
// Question ____________ 95
function numbersGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
const numbersArray = [5, 12, 8, 15, 3, 20];
const filteredNumbers = numbersGreaterThanTen(numbersArray);
console.log(filteredNumbers); // Output: [12, 15, 20]
// Question ___________96
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
export {};
