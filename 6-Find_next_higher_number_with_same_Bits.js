"use strict";
// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5
Object.defineProperty(exports, "__esModule", { value: true });
exports.countOnes = exports.nextHigher = void 0;
// Your task is to find the next higher number (int) with same '1'- Bits.
// I.e. as much 1 bits as before and output next higher than input. Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...
// Some easy examples:
// Input: 129  => Output: 130 (10000001 => 10000010)
// Input: 127 => Output: 191 (01111111 => 10111111)
// Input: 1 => Output: 2 (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
// First some static tests, later on many random tests too;-)!
function nextHigher(n) {
    var count = countOnes(n);
    n++;
    while (countOnes(n) != count) {
        n++;
    }
    return n;
    var binaryN = "0" + n.toString(2);
    console.log(n, binaryN);
    var reverseN = binaryN.split('').reverse();
    var iterator = 0;
    // find the rightmost one with a zero in front of it
    var i = 0;
    console.log(reverseN);
    while (reverseN[i] !== "0" || i >= reverseN.length) {
        i++;
    }
    ;
    while (reverseN[i] !== '1' && i > 0) {
        console.log(reverseN[i], i);
        i--;
    }
    ;
    console.log("location found", reverseN, i);
    var onePosition = i;
    // shift 1s that trail it all the way right.
    var zeroCount = 0;
    while (i >= 0) {
        // count remaining zeroes
        (reverseN[i] === "0") ? zeroCount++ : "";
        i--;
    }
    console.log("zero count", zeroCount);
    var newStringArray = [];
    for (iterator; iterator <= onePosition - zeroCount; iterator++) {
        newStringArray.push("1");
        console.log("1", newStringArray);
    }
    for (iterator; iterator <= onePosition; iterator++) {
        newStringArray.push("0");
        console.log("0", newStringArray);
    }
    for (iterator; iterator < reverseN.length; iterator++) {
        newStringArray.push(reverseN[iterator]);
    }
    console.log("new test", reverseN, newStringArray);
    do {
        if (reverseN[iterator] === "0") {
            console.log(reverseN, iterator);
            reverseN[iterator + 1] = "0";
            reverseN[iterator] = "1";
            console.log("rn", reverseN);
            iterator = reverseN.length;
        }
        iterator++;
    } while (iterator < reverseN.length);
    console.log(reverseN.reverse().join(''));
    return 0; //parseInt(reverseN.reverse().join(''), 2);
}
exports.nextHigher = nextHigher;
console.log(nextHigher(127));
// 01010 -> 01100
// 0110 -> 1001
// 01000 -> 10000
// 01111 -> 10111
// 01010
// 0110110
// 0111100011100 
function countOnes(n) {
    return n.toString(2).split('').map((function (a) { return parseInt(a); })).reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    ;
}
exports.countOnes = countOnes;
