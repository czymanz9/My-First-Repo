import java.util.Scanner;

public class PasswordCheckerCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        String userInput;
        //do-while loop
        String password = "java123";
        do{
            //user input
            System.out.print("Enter password: ");
            userInput = scanner.nextLine();

            if (!userInput.equals(password)) {
                System.out.println("Incorrect password. Try again.");
            }
        } while (!userInput.equals(password));
        System.out.println("Access granted!");
        scanner.close();
    }
}
