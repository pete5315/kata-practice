// https://www.codewars.com/kata/52f831fa9d332c6591000511/train/typescript

// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

class T {
  fullString: string;
  position: number;

  constructor(fullString: string, position: number) {
    this.fullString = fullString;
    this.position = position;
  }
}


export function parseMolecule(formula: string): Record<string, number> {
  // initialize variables
  let output: Record<string, number> = {};
  let multiplier: number = 1;

  // split the string into an array
  let formulaArray: string[] = formula.split("");

  // test each position, updating our output when it's a letter
  let i = 0;
  while (i < formulaArray.length) {
    let type = checkType(formulaArray[i]);
    let numberLength: number;
    console.log("current char", formulaArray[i], type)
    switch (type) {
      case "letter":
        // get full character string and position
        let fullStringAndPosition: T = getFullCharacterStringAndPosition(formulaArray, i)
        console.log(fullStringAndPosition);
        // check next character to see if it is a number
        i = fullStringAndPosition.position;
        multiplier = multiplier * getMultiplier(formulaArray, i)
        console.log("multiplier", multiplier)
        console.log("output", output[fullStringAndPosition.fullString])
        // update output with current multiplier
        output[fullStringAndPosition.fullString] =
          output[fullStringAndPosition.fullString] ?
            output[fullStringAndPosition.fullString] + multiplier : multiplier;
        console.log(output);
        break;
      case "number":
        // get number length
        numberLength = getNumberLength(formulaArray, i)
        // update current multiplier
        multiplier = multiplier / getFullNumber(
          formulaArray,
          i,
          numberLength
        )
        i += numberLength - 1;
        break;
      case "symbol":
        // find the position of the other half of the symbol
        let symbolPosition = createStack(formulaArray, i)
        console.log("symbolPosition", symbolPosition)
        // check if number follows it
        if (checkType(formulaArray[symbolPosition+1]) === "number") {
          let numberPosition = symbolPosition + 1

          // get number length
          numberLength = getNumberLength(formulaArray, symbolPosition)
          // update the multiplier
          console.log("GFN", getFullNumber(
            formulaArray,
            numberPosition,
            numberLength
          ))
          multiplier = multiplier * getFullNumber(
            formulaArray,
            numberPosition,
            numberLength
          )
        }
        break;
      case "false":
        break;
    }
    i++;
  }
  // return the output
  return output;
}

function checkType(character: string): string {
  return /^[a-zA-Z]$/.test(character) ? "letter" :
    (/^[0-9]$/.test(character) ? "number" :
      (/^[{[(]$/.test(character) ? "symbol" : "false"));
}

function getFullCharacterStringAndPosition(array: string[], position: number): T {
  let outputObject = new T("", position);

  outputObject.fullString += array[position]
  if (/^[a-z]$/.test(array[position + 1])) {
    outputObject.position++;
    outputObject.fullString += array[position + 1]
  }
  return outputObject
}

function getMultiplier(array: string[], i: number): number {
  let newMultiplier = 1;
  if (/^[0-9]$/.test(array[i + 1])) {
    let length = getNumberLength(array, i + 1);
    console.log("length", length, "full number", getFullNumber(array, i + 1, length))
    newMultiplier = newMultiplier * getFullNumber(array, i + 1, length);
    console.log("newmulti", newMultiplier)
    i = i + length
  }

  return newMultiplier
}

function getNumberLength(formulaArray: string[], position: number): number {
  let length = 1;
  for (let i = position; i < formulaArray.length; i++) {
    console.log("formula at i+1", formulaArray[i + 1])
    if (/^[0-9]$/.test(formulaArray[i + 1])) {
      length++;
    } else {
      i = formulaArray.length;
    }
  }
  console.log("length", length)
  return length;
}

function getFullNumber(array: string[], position: number, length: number): number {
  let fullNumber = "";
  console.log("GFN2", array, position, length)
  for (let i = 0; i < length; i++) {
    if (parseInt(array[position + i]) > 0) {
      fullNumber = fullNumber + parseInt(array[position + i]);
    }
  }
  return parseInt(fullNumber);
}

function createStack(array: string[], position: number): number {
  let charToSearchFor: string[] = [];
  charToSearchFor.push(checkSymbolChar(array[position]));
  position++;
  while (charToSearchFor.length > 0) {
    console.log(charToSearchFor, array[position])
    switch (array[position]) {
      case "{":
        charToSearchFor.push("}");
        break;
      case "[":
        charToSearchFor.push("]");
        break;
      case "(":
        charToSearchFor.push(")");
        break;
    }
    if (array[position] === charToSearchFor[charToSearchFor.length - 1]) {
      charToSearchFor.pop();
    }
    position++;
  }

  return position - 1;
}

function checkSymbolChar(char: string): string {
  switch (char) {
    case "{":
      return "}";
    case "[":
      return "]";
    case "(":
      return ")";
  }

  return "";
}