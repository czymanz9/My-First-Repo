import java.util.Scanner;

public class ManualNumberConverter {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //user input
        System.out.print("Enter a decimal number: ");
        int number = scanner.nextInt();

        //convert to binary
        String binary = "";
        int num = number;
        while (num > 0) {
            binary = (num % 2) + binary;
            num /= 2;
        }
        if (binary.isEmpty()) binary = "0";
        
        //convert to octal
        String octal = "";
        num = number;
        while (num > 0) {
            octal = (num % 8) + octal;
            num /= 8;
        }
        if (octal.isEmpty()) octal = "0";

        //convert to hexadecimal
        String hexadecimal = "";
        char[] hexDigits = "0123456789ABCDEF".toCharArray();
        num = number;
        while (num > 0) {
            hexadecimal = hexDigits[num % 16] + hexadecimal;
            num /= 16;
        }
        if (hexadecimal.isEmpty()) hexadecimal = "0";

        // results
        System.out.println("\n=== Number System Conversions ===");
        System.out.println("Binary: " + binary);
        System.out.println("Octal: " + octal);
        System.out.println("Hexadecimal: " + hexadecimal);
        
        scanner.close();
    }
}
