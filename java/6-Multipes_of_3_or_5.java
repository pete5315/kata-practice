// https://www.codewars.com/kata/514b92a657cdc65150000006/train/java

public class Solution {

  public int solution(int number) {
    System.out.println(number);
  if(number<0) {
    return 0;
  }
  else {
    number--;
    double highest5=number-number%5;
    double highest3=number-number%3;
    double highest15=number-number%15;
    double longValue = ((highest5+5)/2)*(highest5/5)+((highest3+3)/2)*(highest3/3)-((highest15+15)/2)*(highest15/15);
    return (int) Math.floor(longValue);
  }  }
}

