// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/java

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

import java.util.Set;
import java.util.TreeSet;

public class TwoToOne {

  public static String longest(String s1, String s2) {
    Set<Character> treeSet = new TreeSet<>();
    for (int i = 0; i < s1.length(); i++) {
      treeSet.add(s1.charAt(i));
    }
    for (int i = 0; i < s2.length(); i++) {
      treeSet.add(s2.charAt(i));
    }
    StringBuilder stringBuilder = new StringBuilder();
    for (Character element : treeSet) {
      stringBuilder.append(element);
    }
    return stringBuilder.toString();
  }
}