// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/java

// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

import java.util.Arrays;

public class Kata {
  public static int minimumSteps(int[] numbers, int k) {
    Arrays.sort(numbers);
    int sum = 0, i=0;
    for (int number : numbers) {
      sum += number;
      if (sum >= k) {
        return i;
      }
      i++;
    }
    return 0;
  }
}