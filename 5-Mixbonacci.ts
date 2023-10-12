// https://www.codewars.com/kata/5811aef3acdf4dab5e000251

// DESCRIPTION:
// This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.

// Task
// Mix -nacci sequences using a given pattern p.
// Return the first n elements of the mixed sequence.
// Rules
// The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below (e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
// When n is 0 or p is empty return an empty list.
// If n is more than the length of p repeat the pattern.
// Examples
//             0  1  2  3  4  
// ----------+------------------
// fibonacci:| 0, 1, 1, 2, 3 ...
// padovan:  | 1, 0, 0, 1, 0 ...
// pell:     | 0, 1, 2, 5, 12 ...

// pattern = ['fib', 'pad', 'pel']
// n = 6
// #          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
// # result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
// result = [0, 1, 0, 1, 0, 1]

// pattern = ['fib', 'fib', 'pel']
// n = 6
// #          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
// # result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
// result = [0, 1, 0, 1, 2, 1]
// Sequences
// fibonacci : 0, 1, 1, 2, 3 ...
// padovan: 1, 0, 0, 1, 0 ...
// jacobsthal: 0, 1, 1, 3, 5 ...
// pell: 0, 1, 2, 5, 12 ...
// tribonacci: 0, 0, 1, 1, 2 ...
// tetranacci: 0, 0, 0, 1, 1 ...
// Pattern mapping
// 'fib' -> fibonacci
// 'pad' -> padovan
// 'jac' -> jacobstahl
// 'pel' -> pell
// 'tri' -> tribonacci
// 'tet' -> tetranacci
// If you like this kata, check out the zozonacci sequence.

export function mixbonacci(pattern: string[], length: number): number[] {
  console.log("start", pattern, length);
  if (pattern[0]==='') {
    return [];
  }
  let fibonacci: number[] = [1, 0], padovan: number[] = [1, 0, 0], jacobsthal: number[] = [0, 1], pell: number[] = [1, 0], tribonacci: number[] = [1, 0, 0], tetranacci: number[] = [1, 0, 0, 0]
  function fib(): number {
    if (fibonacci[1] === 0) {
      fibonacci = [0, 1];
      return fibonacci[0];
    }
    let output = fibonacci[0] + fibonacci[1];
    fibonacci = [fibonacci[1], output];
    return fibonacci[0];
  }
  function pad(): number {
    let output = padovan[0]
    padovan = [padovan[1], padovan[2], padovan[0] + padovan[1]]
    return output;
  }
  function jac(): number {
    let output: number = jacobsthal[0];
    let update: number = 2 * jacobsthal[0] + jacobsthal[1]
    jacobsthal = [jacobsthal[1], update]
    return output;
  }
  function pel(): number {
    let output = pell[0];
    let update: number = pell[0] + 2 * pell[1];
    pell = [pell[1], update];
    return output;
  }
  function tri(): number {
    let output: number = tribonacci[0] + tribonacci[1] + tribonacci[2];
    tribonacci = [tribonacci[1], tribonacci[2], output];
    return tribonacci[0];
  }
  function tet(): number {
    let output: number = tetranacci[0] + tetranacci[1] + tetranacci[2] + tetranacci[3];
    tetranacci = [tetranacci[1], tetranacci[2], tetranacci[3], output];
    return tetranacci[0];
  }
  let outputArray: number[] = []
  let i: number = 0;
  while (i<length) {
    switch (pattern[i%pattern.length]) {
      case 'fib':
        outputArray.push(fib());
        break;
      case 'pad':
        outputArray.push(pad());
        break;
      case 'jac':
        outputArray.push(jac());
        break;
      case 'pel':
        outputArray.push(pel());
        break;
      case 'tri':
        outputArray.push(tri());
        break;
      case 'tet':
        outputArray.push(tet());
        break;
    }
    i++;
  }
  return outputArray
}