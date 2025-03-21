import java.util.Scanner;

public class SumOfNumbersCADM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // user input
        System.out.print("Enter a positive integer: ");
        int userInput = scanner.nextInt();

        int i = 1;
        int sum = 0;
        // while loop
        while (i <= userInput) {
            sum += i;
            i++;
        }
        System.out.println("The sum of natural numbers from 1 to " + userInput + " is: " + sum);
        scanner.close();
    }
}
