// https://www.codewars.com/kata/54e320dcebe1e583250008fd/typescript

// DESCRIPTION:
// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!. The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!, etc. More generally, the nth-to-last digit is always 0, 1, 2, ..., n and is in base n!.

// Read more about it at: http://en.wikipedia.org/wiki/Factorial_number_system

// Example
// The decimal number 463 is encoded as "341010", because:

// 463 = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0..9, the biggest number we can encode is 10!-1 (= 3628799). So we extend 0..9 with letters A..Z. With these 36 digits we can now encode numbers up to 36!-1 (= 3.72 × 1041)

// Task
// We will need two functions. The first one will receive a decimal number and return a string with the factorial representation.

// The second one will receive a string with a factorial representation and produce the decimal representation.

// Given numbers will always be positive.

class T {
  factorial: number;
  base: number;

  constructor(factorial: number, base: number) {
    this.factorial = factorial;
    this.base = base;
  }
}

export class G964 {

  public static dec2FactString = (nb: number): string => {
    // initialize variables
    let FactStringArray: number[] = []
    // find factorial larger than nb
    let highestFactorial = findLargerFactorial(nb)
    let currentFactorial = highestFactorial.factorial;
    let currentBase = highestFactorial.base;

    // while loop to keep track of our number
    while (currentBase > 0) {
      FactStringArray.push(0)
      // loop through, checking if new number is smaller than next factorial down
      for (let i = 0; i < currentBase; i++) {
        // count how many of the current factorial can be subtracted to make the current smaller
        if (nb >= currentFactorial) {
          FactStringArray[FactStringArray.length - 1] = FactStringArray[FactStringArray.length - 1] + 1;
          nb = nb - currentFactorial;
        }
      }
      // update iterators for while loop
      currentFactorial = currentFactorial / currentBase;
      currentBase--;
    }

    FactStringArray.push(0);
    // return the string
    let output = convertNumbersToFactForm(FactStringArray);
    return output;
  }



  public static factString2Dec = (str: string): number => {
    // initialize variables
    let subtotal: number = 0;
    let factorialStep: number = 1
    let iterator = 1;
    let multiplier = 1;
    // convert letters to array of numbers
    let numberArr = convertFactFormToNumbers(str);
    console.log(74, numberArr);
    // multiply out factorials to and update subtotal
    numberArr.length > 1 ? numberArr.pop() : true;
    while (numberArr.length > 0) {
      multiplier = multiplier * iterator
      subtotal = subtotal + numberArr[numberArr.length - 1] * multiplier;
      numberArr.pop();
      iterator++;
    }
    // return final subtotal
    return subtotal;
  }


}

function findLargerFactorial(number: number): T {
  let product: number = 1;
  for (let i = 1; i < 36; i++) {
    product = product * i;
    if (product > number) {
      return { factorial: product / i, base: i - 1 };
    }
  }
  return { factorial: 0, base: 0 };
}

function convertNumbersToFactForm(array: number[]): string {
  let stringArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 9) {
      stringArray.push(String.fromCharCode(array[i] + 55))
    } else {
      stringArray.push(array[i].toString())
    }
  }
  return stringArray.join("");
}

function convertFactFormToNumbers(string: string): number[] {
  let numberArr: number[] = []
  let stringArr: string[] = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (/^[0-9]$/.test(stringArr[i])) {
      numberArr.push(parseInt(stringArr[i]))
    } else {
      numberArr.push(stringArr[i].charCodeAt(0) - 'A'.charCodeAt(0) + 10);
    }
    console.log(numberArr);
  }
  return numberArr;
}