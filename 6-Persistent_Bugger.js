"use strict";
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistence = void 0;
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
    var r = 0;
    while (num > 10) {
        var numArray = [];
        while (num > 0) {
            numArray.push(num % 10);
            num = (num - num % 10) / 10;
        }
        num = numArray.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 1);
        r++;
    }
    if (r > 0) {
        r++;
    }
    return r;
}
exports.persistence = persistence;
console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
