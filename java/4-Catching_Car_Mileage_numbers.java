public class CarMileage {

  public static int isInteresting(int n, int[] awesomePhrases) {
    System.out.println(n);
    boolean indicator = false;
    int output = 0;
  
      for (int i = n; i <= n + 2; i++) {
        if (i>99) {
        indicator = checkIsInteresting(i, awesomePhrases);
        if (indicator) {
          if (i == n) { output = 2; } else { output = 1; }
          break;
        }
        if (output > 0) {
          break;
        }
      }
    }
  
    return output;  
  }

  public static boolean checkIsInteresting(int n, int[] awesomePhrases) {
    boolean indicator = false;
    while (!indicator) {
      if (n > 99) {
        indicator = indicator || checkForZeroes(n);
        System.out.println(indicator);
      }
      if (n > 9) {
        indicator = indicator || sameDigits(n);
        System.out.println(indicator);
        indicator = indicator || incrementingDigits(n);
        System.out.println(indicator);
        indicator = indicator || decrementingDigits(n);
        System.out.println(indicator);
        indicator = indicator || palindrome(n);
        System.out.println(indicator);
      }
      indicator = indicator || awesomePhrasesCheck(n, awesomePhrases);
      System.out.println(indicator);
      break;
    }
  
    return indicator;
  }

  public static boolean checkForZeroes(int n) {
    String nString = Integer.toString(n);
    // Check if the first character is a digit (0-9) and the rest are all '0's
    return nString.matches("\\d0*");
  }

  public static boolean sameDigits(int n) {
    String nString = Integer.toString(n);
    for (int i = 1; i < nString.length(); i++) {
      if (nString.charAt(i - 1) != nString.charAt(i)) {
        return false;
      }
    }
    return true;
  }

  public static boolean incrementingDigits(int n) {
    boolean bool = true;
    String nString = Integer.toString(n);
    String[] nStringArray = nString.split("");
    for (int i = 0; i < nStringArray.length-1; i++) {
      if ((Integer.parseInt(nStringArray[i])+1)%10 != (Integer.parseInt(nStringArray[i+1]))) {
        bool = false;
        break;
      }
    }
    return bool;
  }


  public static boolean decrementingDigits(int n) {
    boolean bool = true;
    String nString = Integer.toString(n);
    String[] nStringArray = nString.split("");
    for (int i = 1; i < nStringArray.length; i++) {
      if (Integer.parseInt(nStringArray[i-1]) != (Integer.parseInt(nStringArray[i]) + 1)) {
        bool = false;
        break;
      }
    }
    return bool;
  }
  
  public static boolean palindrome(int n) {
    String nString = Integer.toString(n);
    return new StringBuilder(nString).reverse().toString().equals(nString);
}
  
  public static boolean awesomePhrasesCheck(int n, int[] awesomePhrases) {
    boolean bool = false;
    for (int phrase: awesomePhrases) {
      if (phrase == n) {
        bool = true;
        break;
      }
    }
    return bool;
  }


}