// https://www.codewars.com/kata/546e2562b03326a88e000020/train/java

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!




public class SquareDigit {

  public int squareDigits(int n) {
    String numberString = String.valueOf(n); // Convert the number to a string
    String sum = "";
    int[] digits = new int[numberString.length()];
    for (int i=0; i<numberString.length(); i++) {
      sum += Integer.toString(Integer.parseInt(String.valueOf(numberString.charAt(i)))*Integer.parseInt(String.valueOf(numberString.charAt(i))));
      System.out.print(sum);
    }

    return Integer.parseInt(sum);
  }


}