// https://www.codewars.com/kata/54b72c16cd7f5154e9000457/typescript

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


import { MORSE_CODE } from './preloaded';
export const decodeBits = (bits: string) => {
  bits = removeBits(bits);
  let shortestStringOfOnes: number = Infinity;
  let shortestStringOfZeroes: number = Infinity;
  let longestStringOfOnes: number = 1;
  let currentStringOfOnes: number = 0;
  let currentStringOfZeroes: number = 0;
  let outputCode: string = "";
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i]) === 1) {
      currentStringOfOnes++;
      if (currentStringOfZeroes < shortestStringOfZeroes && currentStringOfZeroes > 0) {
        shortestStringOfZeroes = currentStringOfZeroes
      }
      currentStringOfZeroes = 0;
    } else {
      currentStringOfZeroes++;
      if (currentStringOfOnes < shortestStringOfOnes && currentStringOfOnes > 0) {
        shortestStringOfOnes = currentStringOfOnes;
      }
      currentStringOfOnes = 0;
    }
    if (currentStringOfOnes > longestStringOfOnes) {
      longestStringOfOnes = currentStringOfOnes;
    }
  }
  if (currentStringOfZeroes === Infinity && currentStringOfZeroes > 0) {
    shortestStringOfZeroes = currentStringOfZeroes
  }
  if (currentStringOfOnes === Infinity && currentStringOfOnes > 0) {
    shortestStringOfOnes = currentStringOfOnes;
  }
  let timeUnit: number = Math.min(shortestStringOfOnes, shortestStringOfZeroes, 30)
  let pause: string = "";
  for (let i = 0; i < timeUnit; i++) {
    pause = pause + "0";
  }
  let characterPause: string = pause + pause + pause;
  let wordPause: string = characterPause + characterPause + pause;

  let dot: string = "";
  for (let i = 0; i < timeUnit; i++) {
    dot = dot + "1";
  }
  let dash: string = dot + dot + dot;
  let bitArray: string[][][] = bits.split(wordPause).map((bit) => bit.split(characterPause).map((innerBit) => innerBit.split(pause)))
  for (let bit of bitArray) {
    for (let innerBit of bit) {
      for (let letter of innerBit) {
        if (letter === dot || letter.length < timeUnit) {
          outputCode = outputCode + ".";
        } else {
          outputCode = outputCode + "-";
        }
        console.log(outputCode)
      }
      outputCode = outputCode + " ";
    }
    outputCode = outputCode + "   ";
  }
  outputCode = outputCode.trim();
  return outputCode;

};

export const decodeMorse = (morseCode: string) => {
  morseCode = morseCode.trim();
  let codeArray: string[][] = morseCode.split("   ").map((word) => word.split(" "))
  let outputArray: string[] = [];
  for (let word of codeArray) {
    for (let letter of word) {
      if (MORSE_CODE[letter]) {
        outputArray.push(MORSE_CODE[letter]);
      }
    }
    outputArray.push(" ");
  }
  outputArray.pop();
  return outputArray.join("");
};

function removeBits(bits: string): string {
  let bitsArray: string[] = bits.split("");
  let i: number = 0;
  for (i; i<bitsArray.length; i++) {
    if (bitsArray[i] === "1") {
      break;
    }
  }
  let j: number = bits.length;
  for (j; j>-1; j--) {
    if (bitsArray[j] === "1") {
      break;
    }
  }
  return bits.slice(i, j)
}