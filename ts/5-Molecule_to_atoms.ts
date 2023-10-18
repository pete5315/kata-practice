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

export function parseMolecule(formula: string): Record<string, number> {
  let output: Record<string, number> = {}
  let formulaArray: string[] = formula.split("");
  let stack: number = 0;
  let currentMultiplier: number = 1;
  let currentElement: string = "";
  let numberLength = 0;
  for (let i = 0; i < formulaArray.length; i++) {
    console.log(output);
    if (/^[a-zA-Z]$/.test(formulaArray[i])) {
      currentElement += formulaArray[i]
      if (/^[a-z]$/.test(formulaArray[i + 1])) {
        i++;
        currentElement = currentElement + formulaArray[i]
      }
      if (/^[0-9]$/.test(formulaArray[i + 1])) {
        numberLength = checkNumberLength(formulaArray, i + 1);
        let numberString = "";
        for (let j = i + 1; j < i + 1 + numberLength; j++) {
          numberString = numberString + formulaArray[j];
          console.log("numberstring", numberString);
        }
        currentMultiplier = currentMultiplier * parseInt(numberString)
      }
      if (output[currentElement] > 0) {
        console.log("currentmultiplier1", currentMultiplier)
        output[currentElement] = output[currentElement] + currentMultiplier
      } else {
        console.log("currentmultiplier2", currentMultiplier)
        output[currentElement] = currentMultiplier
      }
      currentElement = "";
    } else if (/^[0-9]$/.test(formulaArray[i])) {
      numberLength = checkNumberLength(formulaArray, i);
      let numberString = "";
      for (let j = i; j < i + numberLength; j++) {
        numberString = numberString + formulaArray[j];
        console.log("numberstring", numberString);
      }
      currentMultiplier = currentMultiplier / parseInt(numberString)
      i = i + numberLength - 1;
      console.log("current multiplier 53", currentMultiplier)
    } else if (/^[{[(]$/.test(formulaArray[i])) {
      stack++;
      let stackIterator = i
      let charToSearchFor: string[] = [];
      while (stack > 0) {
        switch (formulaArray[stackIterator]) {
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
        stackIterator++
        console.log(stack, charToSearchFor, formulaArray[stackIterator], /^[{[(]$/.test(formulaArray[stackIterator]));
        if (formulaArray[stackIterator] === charToSearchFor[charToSearchFor.length - 1]) {
          if (/^[0-9]$/.test(formulaArray[stackIterator + 1])) {
            numberLength = checkNumberLength(formulaArray, stackIterator + 1);
            let numberString = "";
            for (let j = stackIterator + 1; j < stackIterator + 1 + numberLength; j++) {
              numberString = numberString + formulaArray[j];
              console.log("numberstring", numberString);
            }    
            currentMultiplier = currentMultiplier * parseInt(numberString);
          }
          stack--;
          charToSearchFor.pop();
        }
      }
    }
  }

  return output
}

function checkNumberLength(formulaArray: string[], position: number): number {
  let length = 1;
  for (let i = position + 1; i < formulaArray.length; i++) {
    console.log("formula at i+1", formulaArray[i])
    if (/^[0-9]$/.test(formulaArray[i])) {
      length++;
    } else {
      break;
    }
  }
  console.log("length", length)
  return length;
}
