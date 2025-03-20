import java.util.Scanner;

public class OddEvenCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //user input
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        //check if num is positive or negative
        if(num % 2 == 0){
            System.out.println(num + " is an even number");
        }else{
            System.out.println(num + " is an odd number");
        }

        scanner.close();
    }
}
