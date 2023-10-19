// https://www.codewars.com/kata/515e271a311df0350d00000f/train/java

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

public class Kata {
  public static int squareSum(int[] n) {
    int sum = 0;

    for (int i = 0; i < n.length; i++) {
      sum += n[i] * n[i];
    }
    return sum;
  }
}