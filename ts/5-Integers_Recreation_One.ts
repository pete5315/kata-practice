// https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

export const listSquared = (m: number, n: number): number[][] => {
  let outputArray: number[][] = [];
  for (let i = m; i < n; i++) {
    let squaredResult = calculateSquares(findDivisors(i));
    console.log(squaredResult);
    if (checkRoot(squaredResult)) {
      outputArray.push([i, squaredResult]);
      console.log(outputArray)
    }
  }
  return outputArray;
}

function findDivisors(num: number): number[] {
  let divisorArray: number[] = [];
  let i = 1;
  while (i * i <= num) {
    console.log(num / i, Math.floor(num / i))
    if (num / i === Math.floor(num / i)) {
      divisorArray.push(i);
      if (num / i !== i) {
        divisorArray.push(num / i)
      }
    }
    i++;
  }
  return divisorArray;
}

function calculateSquares(divisorsArray: number[]): number {
  let sum: number = 0;
  for (let divisor of divisorsArray) {
    sum = sum + divisor * divisor;
  }
  return sum;
}

function checkRoot(num: number): boolean {
  let i = 1;
  while (i * i <= num) {
    if (i * i === num) {
      return true;
    }
    i++;
  }
  return false;
}