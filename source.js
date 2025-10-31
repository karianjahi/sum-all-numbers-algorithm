/*
Take an array of two numbers and returns the sum of those two numbers plust the sum of all the numbers between them
*/

const sumAll = (anArrayOfTwoNumbers) => {
    let firstNo = anArrayOfTwoNumbers[0];
    let secondNo = anArrayOfTwoNumbers[1];
    if (firstNo > secondNo) anArrayOfTwoNumbers = [secondNo, firstNo];
    return anArrayOfTwoNumbers

}

// Test
let myArray = [10, 7];
console.log(sumAll(myArray));