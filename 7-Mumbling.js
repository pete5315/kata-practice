"use strict";
// // https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accum = void 0;
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
    return __spreadArray([], s, true).map(function (letter, i) { return (i === 0 ? letter.toUpperCase() : letter.toUpperCase() + letter.toLowerCase().repeat(i - 1)); }).join('');
}
exports.accum = accum;
console.log(accum("ZpglnRxqenU"));
