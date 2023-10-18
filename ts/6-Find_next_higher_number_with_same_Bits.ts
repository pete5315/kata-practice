// https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5

// Your task is to find the next higher number (int) with same '1'- Bits.

// I.e. as much 1 bits as before and output next higher than input. Input is always an int in between 1 and 1<<30 (inclusive). No bad cases or special tricks...

// Some easy examples:
// Input: 129  => Output: 130 (10000001 => 10000010)
// Input: 127 => Output: 191 (01111111 => 10111111)
// Input: 1 => Output: 2 (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111)
// First some static tests, later on many random tests too;-)!

export function nextHigher(n: number): number {
  let count= countOnes(n)
  n++;
  while (countOnes(n)!=count) {n++}
  return n;
}



export function countOnes(n: number): number {
  return n.toString(2).split('').map(((a) => parseInt(a))).reduce((accumulator, currentValue) => accumulator + currentValue, 0);;
}