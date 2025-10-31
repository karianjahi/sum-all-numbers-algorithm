/*
Take an array of two numbers and returns the sum of those two numbers plust the sum of all the numbers between them
*/

const sumAll = (anArrayOfTwoNumbers) => {
    if (anArrayOfTwoNumbers[0] > anArrayOfTwoNumbers[1]) anArrayOfTwoNumbers = [anArrayOfTwoNumbers[1], anArrayOfTwoNumbers[0]];
    let sumNos = 0
    for (let i=anArrayOfTwoNumbers[0]; i < anArrayOfTwoNumbers[1]+1; i++) sumNos += i
    return sumNos;
}

// Test
let myArray = [10, 5];
console.log(sumAll(myArray));