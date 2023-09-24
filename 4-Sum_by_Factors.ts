// https://www.codewars.com/kata/54d496788776e49e6b00052f/typescript

// DESCRIPTION:
// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

export function sumOfDivided(lst: number[]): number[][] {
  console.log("list", lst);
  // initialize variables
  let arrayOfPrimes: number[] = [];
  let outputArray: number[][] = [];
  // make list of prime factors of elements of list
  for (let i = 0; i < lst.length; i++) {
    let newArrayOfPrimes = new Set(arrayOfPrimes.concat(findThePrimes(lst[i])));
    arrayOfPrimes = [];
    for (let prime of newArrayOfPrimes) {
      arrayOfPrimes.push(prime);
    }
  }
  arrayOfPrimes.sort((a,b) => a - b)
  console.log("arrayOfPrimes", arrayOfPrimes);
  // for each prime factor, concat an array with the sum of the elements of the list that have that factor 
  for (let i = 0; i < arrayOfPrimes.length; i++) {
    outputArray.push([
      arrayOfPrimes[i],
      findTheMultiples(arrayOfPrimes[i], lst)
    ])
  }
  return outputArray;
}

function findThePrimes(num: number): number[] {
  let outputArray: number[] = [];
  for (let i = 2; i <= Math.abs(num); i++) {
    if (Math.abs(num / i) === Math.floor(Math.abs(num / i))) {
      outputArray.push(i);
      while (Math.abs(num / i) === Math.floor(Math.abs(num / i))) {
        num = num / i;
      }
    }
  }
  return outputArray
}

function findTheMultiples(prime: number, lst: number[]) {
  let sum = 0;
  for (let i=0; i < lst.length; i++) {
    if (Math.abs(lst[i]) / prime === Math.floor(Math.abs(lst[i] / prime))) {
      sum = sum + lst[i];
    }
  }
  return sum;
}