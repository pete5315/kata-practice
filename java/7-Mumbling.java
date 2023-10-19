// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/java

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

public class Accumul {

  public static String accum(String s) {
    String output = "";
    for (int i = 0; i < s.length(); i++) {
      output += Character.toUpperCase(s.charAt(i));
      for (int j = 0; j < i; j++) {
        output += Character.toLowerCase(s.charAt(i));
      }
      if (i==s.length()-1) {
        break;
      }
      output += "-";
    }
    return output;
  }
}