# sum-all-numbers-algorithm

## 🧮 Description
This project implements a simple **sum-all-numbers algorithm**.  
The algorithm takes an array of **two numbers** and returns the **sum of those two numbers plus all the integers between them**, inclusive.

For example:
- Input: `[1, 4]`
- Output: `10` (because 1 + 2 + 3 + 4 = 10)

---

## 🚀 Features
- Handles unordered inputs (e.g. `[10, 5]` works just like `[5, 10]`)
- Simple and efficient loop-based solution
- Pure JavaScript, no dependencies

---

## 🧠 How It Works
1. The function receives an array containing two numbers.
2. It checks which number is smaller and swaps them if needed.
3. It iterates from the smaller number to the larger number, adding each value to a running total.
4. The final sum is returned.

---

## 🧩 Code Example

```javascript
/*
Take an array of two numbers and return the sum of those two numbers
plus the sum of all the numbers between them.
*/

const sumAll = (anArrayOfTwoNumbers) => {
    if (anArrayOfTwoNumbers[0] > anArrayOfTwoNumbers[1]) {
        anArrayOfTwoNumbers = [anArrayOfTwoNumbers[1], anArrayOfTwoNumbers[0]];
    }
    let sumNos = 0;
    for (let i = anArrayOfTwoNumbers[0]; i <= anArrayOfTwoNumbers[1]; i++) {
        sumNos += i;
    }
    return sumNos;
};

// Test
let myArray = [10, 5];
console.log(sumAll(myArray)); // Output: 45
```
## Console and Output Info

| Input     | Output | Explanation                          |
|------------|---------|--------------------------------------|
| [1, 4]     | 10      | 1 + 2 + 3 + 4                       |
| [5, 10]    | 45      | 5 + 6 + 7 + 8 + 9 + 10              |
| [10, 5]    | 45      | Automatically swaps to [5, 10]       |

## License
MIT License -> See License

