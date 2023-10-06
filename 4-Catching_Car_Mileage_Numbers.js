"use strict";
// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteresting = void 0;
// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
// So, you should expect these inputs and outputs:
// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0
// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2
// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.
function isInteresting(n, awesomePhrases) {
    var indicator = false;
    var output = 0;
    if (n > 99) {
        for (var i = n; i <= n + 2; i++) {
            console.log("i", i);
            indicator = checkIsInteresting(i, awesomePhrases);
            if (indicator) {
                if (i === n) {
                    output = 2;
                }
                else {
                    output = 1;
                }
                break;
            }
            if (output > 0) {
                break;
            }
        }
    }
    return output;
}
exports.isInteresting = isInteresting;
function checkIsInteresting(n, awesomePhrases) {
    console.log("NEW CHECK");
    var indicator = false;
    while (!indicator) {
        console.log(65, indicator);
        if (n > 99) {
            indicator = indicator || checkForZeroes(n);
        }
        console.log(67, indicator);
        if (n > 9) {
            indicator = indicator || sameDigits(n);
            console.log(70, indicator);
            indicator = indicator || incrementingDigits(n);
            console.log(73, indicator);
            indicator = indicator || decrementingDigits(n);
            console.log(75, indicator);
            indicator = indicator || palindrome(n);
            console.log(77, indicator);
        }
        indicator = indicator || awesomePhrasesCheck(n, awesomePhrases);
        console.log(80, indicator);
        break;
    }
    return indicator;
}
function checkForZeroes(n) {
    var bool = false;
    while (n >= 10) {
        console.log("n", n);
        n = n / 10;
    }
    if (Math.floor(n) === n) {
        bool = true;
    }
    return bool;
}
function sameDigits(n) {
    var nString = n.toString();
    for (var i = 1; i < nString.length; i++) {
        console.log(nString.charAt(i - 1), nString.charAt(i));
        if (nString.charAt(i - 1) !== nString.charAt(i)) {
            return false;
        }
    }
    return true;
}
function incrementingDigits(n) {
    var bool = true;
    var nString = n.toString();
    var nStringArray = nString.split("");
    for (var i = 0; i < nStringArray.length - 1; i++) {
        console.log(121, (parseInt(nStringArray[i]) + 1) % 10, (parseInt(nStringArray[i + 1])));
        if ((parseInt(nStringArray[i]) + 1) % 10 !== (parseInt(nStringArray[i + 1]))) {
            console.log(124, ((parseInt(nStringArray[i]) + 1) % 10), (parseInt(nStringArray[i + 1])));
            bool = false;
            break;
        }
    }
    return bool;
}
function decrementingDigits(n) {
    var bool = true;
    var nString = n.toString();
    var nStringArray = nString.split("");
    for (var i = 1; i < nStringArray.length; i++) {
        console.log(137, parseInt(nStringArray[i - 1]), (parseInt(nStringArray[i]) + 1));
        if (parseInt(nStringArray[i - 1]) !== (parseInt(nStringArray[i]) + 1)) {
            bool = false;
            break;
        }
    }
    return bool;
}
function palindrome(n) {
    var bool = false;
    var nString = n.toString();
    var nArray = nString.split('');
    var nArrayReverse = [];
    console.log(nString, nArray);
    for (var i = nArray.length - 1; i >= 0; i--) {
        nArrayReverse.push(nArray[i]);
    }
    var nStringReverse = nArrayReverse.join("");
    console.log(nStringReverse, nString);
    if (parseInt(nStringReverse) === n) {
        console.log(nStringReverse, nString);
        bool = true;
    }
    console.log(bool);
    return bool;
}
function awesomePhrasesCheck(n, awesomePhrases) {
    var bool = false;
    for (var _i = 0, awesomePhrases_1 = awesomePhrases; _i < awesomePhrases_1.length; _i++) {
        var phrase = awesomePhrases_1[_i];
        if (phrase === n) {
            bool = true;
            break;
        }
    }
    return bool;
}
console.log("output", isInteresting(109, [1337, 256]));
//  console.log("output", isInteresting(1336, [1337, 256]));
//  console.log("output", isInteresting(1337, [1337, 256]));
//  console.log("output", isInteresting(11208, [1337, 256]));
//  console.log("output", isInteresting(11209, [1337, 256]));
//  console.log("output", isInteresting(11211, [1337, 256]));
// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
