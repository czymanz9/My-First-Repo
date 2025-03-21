import java.util.Scanner;

public class LargestNumberFinderCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int largest = -1;

        //user input
        System.out.print("Enter a number (-1 to stop): ");
        int userInput = scanner.nextInt();

        //loop
        while( userInput != -1){
            if(userInput > largest){
                largest = userInput;
            }
            System.out.print("Enter a number (-1 to stop): ");
            userInput = scanner.nextInt();
        }
        System.out.println("The largest number entered is: " + largest);
        scanner.close();
    }
}
