// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/typescript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


export const pigIt = (a : string) : string =>  {
  console.log(a);
  // let arrayOfStrings: string[] = addSpaceBeforePunctuation(a).split(" ");
  let arrayOfStrings: string[] = a.split(" ");
  let resultArray: string[] = [];
  console.log(arrayOfStrings)
  for (let string of arrayOfStrings) {
    if (/[A-Za-z]/.test(string)) {
      resultArray.push(string.slice(1)+string.slice(0,1)+"ay");
    } else  {
      resultArray.push(string);
    }
    
  }
  console.log(resultArray.join(" "));
  return resultArray.join(" ");
}

// function addSpaceBeforePunctuation(inputString: string): string {
  
//   return inputString.replace(/[.,;:!?]/g, ' $&');
// }