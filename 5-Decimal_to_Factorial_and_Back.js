"use strict";
// https://www.codewars.com/kata/54e320dcebe1e583250008fd/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
// DESCRIPTION:
// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.
// In this system, the last digit is always 0 and is in base 0!. The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!, etc. More generally, the nth-to-last digit is always 0, 1, 2, ..., n and is in base n!.
// Read more about it at: http://en.wikipedia.org/wiki/Factorial_number_system
// Example
// The decimal number 463 is encoded as "341010", because:
// 463 = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!
// If we are limited to digits 0..9, the biggest number we can encode is 10!-1 (= 3628799). So we extend 0..9 with letters A..Z. With these 36 digits we can now encode numbers up to 36!-1 (= 3.72 × 1041)
// Task
// We will need two functions. The first one will receive a decimal number and return a string with the factorial representation.
// The second one will receive a string with a factorial representation and produce the decimal representation.
// Given numbers will always be positive.
var T = /** @class */ (function () {
    function T(factorial, base) {
        this.factorial = factorial;
        this.base = base;
    }
    return T;
}());
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.dec2FactString = function (nb) {
        // initialize variables
        var FactStringArray = [];
        // find factorial larger than nb
        var highestFactorial = findLargerFactorial(nb);
        var currentFactorial = highestFactorial.factorial;
        var currentBase = highestFactorial.base;
        // while loop to keep track of our number
        while (nb > 0) {
            FactStringArray.push(0);
            // loop through, checking if new number is smaller than next factorial down
            for (var i = 0; i < currentBase; i++) {
                // count how many of the current factorial can be subtracted to make the current smaller
                if (nb > currentFactorial) {
                    FactStringArray[FactStringArray.length - 1] = FactStringArray[FactStringArray.length - 1] + 1;
                    console.log(FactStringArray);
                    nb = nb - currentFactorial;
                    console.log(nb, currentFactorial);
                }
            }
            // update iterators for while loop
            currentFactorial = currentFactorial / currentBase;
            currentBase--;
        }
        FactStringArray.push(0);
        // return the string
        var output = convertNumbersToFactForm(FactStringArray);
        console.log("output", output);
        return output;
    };
    G964.factString2Dec = function (str) {
        // your code
        return 0;
    };
    return G964;
}());
exports.G964 = G964;
function findLargerFactorial(number) {
    var product = 1;
    for (var i = 1; i < 36; i++) {
        product = product * i;
        if (product > number) {
            console.log(product);
            return { factorial: product / i, base: i - 1 };
        }
    }
    return { factorial: 0, base: 0 };
}
function convertNumbersToFactForm(array) {
    var stringArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 9) {
            console.log(92, String.fromCharCode(array[i] + 55));
            stringArray.push(String.fromCharCode(array[i] + 55));
        }
        else {
            console.log(95, array[i].toString());
            stringArray.push(array[i].toString());
        }
    }
    return stringArray.join("");
}
console.log(G964.dec2FactString(2982));
