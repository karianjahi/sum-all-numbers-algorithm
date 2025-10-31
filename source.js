/*
Take an array of two numbers and returns the sum of those two numbers plust the sum of all the numbers between them
*/

const sumAll = (anArrayOfTwoNumbers) => {
    if (anArrayOfTwoNumbers[0] > anArrayOfTwoNumbers[1]) anArrayOfTwoNumbers = [anArrayOfTwoNumbers[1], anArrayOfTwoNumbers[0]];
    return anArrayOfTwoNumbers;

}

// Test
let myArray = [10, 7];
console.log(sumAll(myArray));