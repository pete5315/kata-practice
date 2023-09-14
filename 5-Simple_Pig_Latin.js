"use strict";
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
var pigIt = function (a) {
    var arrayOfStrings = addSpaceBeforePunctuation(a).split(" ");
    var resultArray = [];
    console.log(arrayOfStrings);
    for (var _i = 0, arrayOfStrings_1 = arrayOfStrings; _i < arrayOfStrings_1.length; _i++) {
        var string = arrayOfStrings_1[_i];
        if (/[A-Za-z]/.test(string)) {
            resultArray.push(string.slice(1) + string.slice(0, 1) + "ay");
        }
        else {
            resultArray[resultArray.length - 1] += string;
        }
    }
    console.log(resultArray.join(" "));
    return resultArray.join(" ");
};
exports.pigIt = pigIt;
function addSpaceBeforePunctuation(inputString) {
    return inputString.replace(/[.,;:!?]/g, ' $&');
}
(0, exports.pigIt)("THIS IS A STRING!");
