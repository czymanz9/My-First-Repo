import java.util.Scanner;

public class ElectricityBillCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

         //user input
        System.out.print("Enter number of units consumed: ");
        double num = scanner.nextDouble();

        if(num < 101){
            System.out.println("Total Bill: " + num * 1.50);
        }else if(num < 300){
            double total = (100 * 1.50) + ((num - 100) * 2.50);
            System.out.println("Total Bill: " +  total );
        }else{
            double total = (100 * 1.50) + (200 * 2.50) + ((num - 300) * 3.50);
            System.out.println("Total Bill: " + total);
        }

        scanner.close();
    }
}
