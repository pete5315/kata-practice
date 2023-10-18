// https://www.codewars.com/kata/546e2562b03326a88e000020/typescript

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

export class Kata {
  static squareDigits(num: number): number {
    if (num===0) {
      return 0;
    }
    let numArray: number[] = [];
    while(num>0) {
      numArray.unshift(num%10);
      num=(num-num%10)/10;
    }
    let returnString: string = "";
    for(let i=0; i<numArray.length; i++) {
      console.log((numArray[i]*numArray[i]));
      returnString+=((numArray[i]*numArray[i]).toString());
      console.log(returnString);
    }
    return parseInt(returnString);
  }
}

Kata.squareDigits(919);