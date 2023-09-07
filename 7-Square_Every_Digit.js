"use strict";
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
// Happy Coding!
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        var numArray = [];
        while (num > 0) {
            numArray.push(num % 10);
            num = (num - num % 10) / 10;
        }
        var returnString = "";
        for (var i = 0; i < numArray.length; i++) {
            console.log((numArray[i] * numArray[i]));
            returnString += ((numArray[i] * numArray[i]).toString());
            console.log(returnString);
        }
        return parseInt(returnString);
    };
    return Kata;
}());
exports.Kata = Kata;
Kata.squareDigits(919);
