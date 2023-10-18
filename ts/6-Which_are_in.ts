// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.


export function inArray(a1: string[], a2: string[]): string[] {
  return a1.map(a1string => a2.some(a2string => a2string.includes(a1string)) ? a1string : "").filter((str) => str !== "").sort();
}