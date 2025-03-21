import java.util.Scanner;
import java.util.Random;

public class GuessingGameCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        //random num
        int randomNumber = random.nextInt(50) + 1;
        int attempts = 0;

        //user input
        System.out.print("Guess a number between 1 and 50: ");
        int guess = scanner.nextInt();
        
        //loop
        while (true) {
            attempts++;

            if(guess < randomNumber) {
                System.out.println("Too low! Try again.");
            }else if(guess > randomNumber) {
                System.out.println("Too high! Try again.");
            }else{
                System.out.println("Correct! You guessed it in " + attempts + " attempts.");
                break;
            }
            System.out.print("Guess a number between 1 and 50: ");
            guess = scanner.nextInt();
        }
        scanner.close();
    }
}
