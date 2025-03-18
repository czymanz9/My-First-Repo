import java.util.Scanner;
public class BMICalculator {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //Input
        System.out.print("Enter your weight (kg): ");
        double weight = scanner.nextDouble();
        System.out.print("Enter your height (meters): ");
        double height = scanner.nextDouble();

        //Calculations and Ternary Operator
        Double BMI = weight / (height * height);
        String underWeight = ( BMI < 18.5 ) ?  "Underweight" : "";
        String normalWeight = ( BMI >= 18.5 && BMI < 24.9 ) ? "Normal" : "";
        String overWeight = ( BMI >= 25 && BMI < 29.9 ) ? "Overweight" : "";
        String obese = ( BMI >= 30 ) ? "Obese" : "";

        //Output
        System.out.println("=== BMI Report ===");
        if(BMI < 18.5){
            System.out.println("Your BMI: " + BMI);
            System.out.println("Health Status: " + underWeight);
        }else if (BMI >= 18.5 && BMI < 24.9){
            System.out.println("Your BMI: " + BMI);
            System.out.println("Health Status: " + normalWeight);
        }else if (BMI >= 25 && BMI < 29.9){
            System.out.println("Your BMI: " + BMI);
            System.out.println("Health Status: " + overWeight);
        }else {
            System.out.println("Your BMI: " + BMI);
            System.out.println("Health Status: " + obese);
        }
    }
}
