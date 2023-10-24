https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/java

public class SecureTester{
  
  public static boolean alphanumeric(String s){
  if (s.length()==0) {
    return false;
  }
  return  s.matches("[A-Za-z0-9]+");  
  }
}