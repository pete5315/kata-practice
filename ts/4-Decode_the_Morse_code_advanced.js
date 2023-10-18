"use strict";
// https://www.codewars.com/kata/54b72c16cd7f5154e9000457/typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBits = void 0;
// In this kata you have to write a Morse code decoder for wired electrical telegraph.
// Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station. The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).
// When transmitting the Morse code, the international standard specifies that:
// "Dot" – is 1 time unit long.
// "Dash" – is 3 time units long.
// Pause between dots and dashes in a character – is 1 time unit long.
// Pause between characters inside a word – is 3 time units long.
// Pause between words – is 7 time units long.
// However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.
// For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.
// For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:
// 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
// As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".
// That said, your task is to implement two functions:
// Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
// 2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
// The Morse code table is preloaded for you (see the solution setup, to get its identifier in your language).
// Eg:
//   morseCodes(".--") //to access the morse translation of ".--"
// All the test strings would be valid to the point that they could be reliably decoded as described above, so you may skip checking for errors and exceptions, just do your best in figuring out what the message is!
// Good luck!
// import { MORSE_CODE } from './preloaded';
var decodeBits = function (bits) {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    console.log(bits);
    var shortestStringOfOnes = 0;
    var longestStringOfOnes = 0;
    var currentStringOfOnes = 0;
    var outputCode = "";
    for (var i = 0; i < bits.length; i++) {
        if (parseInt(bits[i]) === 1) {
            currentStringOfOnes++;
        }
        else {
            if (shortestStringOfOnes === 0) {
                shortestStringOfOnes = currentStringOfOnes;
                console.log("ss2", shortestStringOfOnes);
            }
            if (shortestStringOfOnes > currentStringOfOnes && currentStringOfOnes > 0) {
                shortestStringOfOnes = currentStringOfOnes;
                console.log("ss1", shortestStringOfOnes);
            }
            currentStringOfOnes = 0;
        }
        if (currentStringOfOnes > longestStringOfOnes) {
            longestStringOfOnes = currentStringOfOnes;
        }
    }
    if (shortestStringOfOnes === 0) {
        shortestStringOfOnes = longestStringOfOnes;
    }
    var timeUnit = Math.max(shortestStringOfOnes, (longestStringOfOnes / 3));
    var pause = "";
    for (var i = 0; i < timeUnit; i++) {
        pause = pause + "0";
    }
    var characterPause = pause + pause + pause;
    var wordPause = characterPause + characterPause + pause;
    var dot = "";
    for (var i = 0; i < timeUnit; i++) {
        dot = dot + "1";
    }
    var dash = dot + dot + dot;
    console.log("dot", dot, "dash", dash);
    var bitArray = bits.split(wordPause).map(function (bit) { return bit.split(characterPause).map(function (innerBit) { return innerBit.split(pause); }); });
    console.log("bitarray", bitArray);
    for (var _i = 0, bitArray_1 = bitArray; _i < bitArray_1.length; _i++) {
        var bit = bitArray_1[_i];
        for (var _a = 0, bit_1 = bit; _a < bit_1.length; _a++) {
            var innerBit = bit_1[_a];
            for (var _b = 0, innerBit_1 = innerBit; _b < innerBit_1.length; _b++) {
                var letter = innerBit_1[_b];
                if (letter === dot) {
                    outputCode = outputCode + ".";
                }
                else {
                    outputCode = outputCode + "-";
                }
                console.log(outputCode);
            }
            outputCode = outputCode + " ";
        }
        outputCode = outputCode + "   ";
    }
    console.log(outputCode);
    outputCode = outputCode.trim();
    return outputCode;
};
exports.decodeBits = decodeBits;
// export const decodeMorse = (morseCode: string) => {
//   morseCode = morseCode.trim();
//   let codeArray: string[][] = morseCode.split("   ").map((word) => word.split(" "))
//   let outputArray: string[] = [];
//   for (let word of codeArray) {
//     for (let letter of word) {
//       if(MORSE_CODE[letter]) {
//         outputArray.push(MORSE_CODE[letter]);
//       }
//     }
//     outputArray.push(" ");
//   }
//   outputArray.pop();
//   return outputArray.join("");
// };
console.log((0, exports.decodeBits)('111'));
