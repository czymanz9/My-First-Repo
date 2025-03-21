import java.util.Random;
import java.util.Scanner;

public class RockPaperScissorsCADM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // user input
        System.out.print("Enter your choice (R, P, S): ");
        String userChoice = scanner.next().toUpperCase();

        // check if user input is valid
        if (!userChoice.equals("R") && !userChoice.equals("P") && !userChoice.equals("S")) {
            System.out.println("Invalid choice!");
        }

        // computer choice
        String[] choices = { "R", "P", "S" };
        String computerChoice = choices[random.nextInt(3)];
        System.out.println("Computer chose: " + computerChoice);

        // Switch
        switch (userChoice) {
            case "R":
                if (computerChoice.equals("R")) {
                    System.out.println("It's a tie!");
                } else if (computerChoice.equals("P")) {
                    System.out.println("Computer wins!");
                } else {
                    System.out.println("You win!");
                }
                break;
            case "P":
                if (computerChoice.equals("P")) {
                    System.out.println("It's a tie!");
                } else if (computerChoice.equals("S")) {
                    System.out.println("Computer wins!");
                } else {
                    System.out.println("You win!");
                }
                break;
            case "S":
                if (computerChoice.equals("S")) {
                    System.out.println("It's a tie!");
                } else if (computerChoice.equals("R")) {
                    System.out.println("Computer wins!");
                } else {
                    System.out.println("You win!");
                }
                break;
        }

        scanner.close();
    }
}
