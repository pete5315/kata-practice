// https://www.codewars.com/kata/55cf3b567fc0e02b0b00000b/train/typescript

// From wikipedia https://en.wikipedia.org/wiki/Partition_(number_theory)

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

// For example, 4 can be partitioned in five distinct ways:

// 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.

// We can write:

// enum(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]] and

// enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].

// The number of parts in a partition grows very fast. For n = 50 number of parts is 204226, for 80 it is 15,796,476 It would be too long to tests answers with arrays of such size. So our task is the following:

// 1 - n being given (n integer, 1 <= n <= 50) calculate enum(n) ie the partition of n. We will obtain something like that:
// enum(n) -> [[n],[n-1,1],[n-2,2],...,[1,1,...,1]] (order of array and sub-arrays doesn't matter). This part is not tested.

// 2 - For each sub-array of enum(n) calculate its product. If n = 5 we'll obtain after removing duplicates and sorting:

// prod(5) -> [1,2,3,4,5,6]

// prod(8) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18]

// If n = 40 prod(n) has a length of 2699 hence the tests will not verify such arrays. Instead our task number 3 is:

// 3 - return the range, the average and the median of prod(n) in the following form (example for n = 5):

// "Range: 5 Average: 3.50 Median: 3.50"

// Range is an integer, Average and Median are float numbers rounded to two decimal places (".2f" in some languages).

// Notes:
// Range : difference between the highest and lowest values.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

// Median : The median is the number separating the higher half of a data sample from the lower half. (https://en.wikipedia.org/wiki/Median)

// Hints:
// Try to optimize your program to avoid timing out.

// Memoization can be helpful but it is not mandatory for being successful.

// export const part = (n: number): string => {
export const part = (n: number): number => {
  // your code
  let arrayOfSums: number[] = [];
  for (let i = 1; i <= n; i++) {
    // console.log("i", i)
    arrayOfSums.push(i);
  }
  // find array of sums
  // find array of products
  for (let i = 2; i < n; i++) {
    // console.log(i);
    splitUp(n - i, i, i, arrayOfSums);
  }

  // find range, average, median
  arrayOfSums.sort((a, b) => a - b)
  let range: number = arrayOfSums[arrayOfSums.length - 1] - arrayOfSums[0];
  let average: string = ((arrayOfSums.reduce((pre, cur) => pre + cur, 0)) / arrayOfSums.length).toFixed(2);
  let median: string;
  if (arrayOfSums.length % 2) {
    median = arrayOfSums[((arrayOfSums.length + 1) / 2) - 1].toFixed(2);
  } else {
    // console.log(arrayOfSums[arrayOfSums.length / 2], arrayOfSums)
    median = ((arrayOfSums[arrayOfSums.length / 2] + arrayOfSums[arrayOfSums.length / 2 - 1]) / 2).toFixed(2);
  }
  // console.log(arrayOfSums, `Range: ${range} Average: ${average} Median: ${median}`)
  return arrayOfSums[arrayOfSums.length - 1]
  // return `Range: ${range} Average: ${average} Median: ${median}`
}

function splitUp(amountLeft: number, currentProd: number, currentSize: number, arrayOfSums: number[]): void {
  // base case: number cannot be split anymore
  // console.log("alcscp", amountLeft, currentSize, currentProd)
  for (let i = currentSize; i <= amountLeft; i++) {
    // console.log("cpi", currentProd, i);
    splitUp(amountLeft - i, currentProd * i, i, arrayOfSums)
  } if (amountLeft <= currentSize) {
    if (amountLeft === currentSize) {
      currentProd *= currentSize;
    }
    // console.log(currentProd, arrayOfSums)
    if (arrayOfSums.indexOf(currentProd) === -1) {
      arrayOfSums.push(currentProd);
    }
    return;
  }
}

// console.log(sumOfPrimes(14));



// console.log(upperBound(9))

export const part2 = (n: number): string => {
  // your code
  let arrayOfSums: number[] = [];
  let uB: number = upperBound(n)
  for (let i = 1; i <= uB; i++) {
    if (sumOfPrimes(i) <= n) {
      arrayOfSums.push(i);
    }
  }

  // find range, average, median
  arrayOfSums.sort((a, b) => a - b)
  let range: number = arrayOfSums[arrayOfSums.length - 1] - arrayOfSums[0];
  let average: string = ((arrayOfSums.reduce((pre, cur) => pre + cur, 0)) / arrayOfSums.length).toFixed(2);
  let median: string;
  if (arrayOfSums.length % 2) {
    median = arrayOfSums[((arrayOfSums.length + 1) / 2) - 1].toFixed(2);
  } else {
    // console.log(arrayOfSums[arrayOfSums.length / 2], arrayOfSums)
    median = ((arrayOfSums[arrayOfSums.length / 2] + arrayOfSums[arrayOfSums.length / 2 - 1]) / 2).toFixed(2);
  }
  console.log(arrayOfSums, `Range: ${range} Average: ${average} Median: ${median}`)
  return `Range: ${range} Average: ${average} Median: ${median}`
}

function upperBound(n: number): number {
  let bound: number = 1;
  // console.log(n, bound);
  if (n === 1) {
    return 1;
  }
  while (n > 0) {
    if (n >= 5) {
      bound *= 3;
      n -= 3;
    } else {
      bound *= 2;
      n -= 2;
    }
  }
  if (n === -1) {
    bound /= 4;
    bound *= 3;
  }
  console.log("bound", bound);
  return bound;
}

function sumOfPrimes(n: number): number {
  // console.log("n", n)
  if (n < 2) {
    return n;
  }
  let sum: number = 0
  for (let i = 2; i <= n; i++) {
    // console.log(n, i)
    if (n % i === 0) {
      n /= i;
      sum += i;
      i--;
    }
  }
  return sum;
}

export const part3 = (n: number): string => {
  let arrayOfSums: number[] = [];
  let uB: number = upperBound(n)
  if (n>=1) {
    arrayOfSums.push(1);
    for (let i=2; i<=uB; i++) {
      for (let j=2; j<=n; j++) {
        if (i/j===Math.floor(i/j)) {
          arrayOfSums.push(i);
          break;
        }
      }
    }
  }

  arrayOfSums.sort((a, b) => a - b)
  let range: number = arrayOfSums[arrayOfSums.length - 1] - arrayOfSums[0];
  let average: string = ((arrayOfSums.reduce((pre, cur) => pre + cur, 0)) / arrayOfSums.length).toFixed(2);
  let median: string;
  if (arrayOfSums.length % 2) {
    median = arrayOfSums[((arrayOfSums.length + 1) / 2) - 1].toFixed(2);
  } else {
    // console.log(arrayOfSums[arrayOfSums.length / 2], arrayOfSums)
    median = ((arrayOfSums[arrayOfSums.length / 2] + arrayOfSums[arrayOfSums.length / 2 - 1]) / 2).toFixed(2);
  }
  console.log(arrayOfSums, `Range: ${range} Average: ${average} Median: ${median}`)
  return `Range: ${range} Average: ${average} Median: ${median}`
}

part2(8);




















//Looked up a solution because my code was too slow :-/

function partitions(n: number): number[][] {
  function partitionRecursive(n: number, start: number = 1): number[][] {
    if (n === 0) {
      return [[]];
    }

    const result: number[][] = [];
    for (let i = start; i <= n; i++) {
      const subPartitions = partitionRecursive(n - i, i);
      for (const subPartition of subPartitions) {
        result.push([i, ...subPartition]);
      }
    }
    console.log(result);
    return result;
  }

  return partitionRecursive(n);
}

function product(arr: number[]): number {
  return arr.reduce((acc, num) => acc * num, 1);
}

function prodAndStats(n: number): string {
  const partitionsList: number[][] = partitions(n);
  const productSet: Set<number> = new Set();

  for (const partition of partitionsList) {
    productSet.add(product(partition));
  }

  const productList: number[] = [];
  productSet.forEach((item) => {
    productList.push(item);
  });
  productList.sort((a, b) => a - b);
    const avg: number = productList.reduce((acc, num) => acc + num, 0) / productList.length;

  let median: number;
  if (productList.length % 2 === 0) {
    median = (productList[productList.length / 2 - 1] + productList[productList.length / 2]) / 2.0;
  } else {
    median = productList[Math.floor(productList.length / 2)];
  }

  return `Range: ${productList[productList.length - 1] - productList[0]} Average: ${avg.toFixed(2)} Median: ${median.toFixed(2)}`;
}

// // Example usage:
// const n: number = 50;
// const result: string = prodAndStats(n);
// console.log(result);  // Output: "Range: 5 Average: 3.50 Median: 3.50"
