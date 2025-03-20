import java.util.Scanner;

public class GradingSystemCADM {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //user input
        System.out.print("Enter your score: ");
        int score = scanner.nextInt();

        //Grading w/ feedback
        if(score > 89){
            System.out.println("Excellent for Grade A!");
        }else if(score > 74 && score < 90){
            System.out.println("Good Job for Grade B!");
        }else if(score > 49 && score < 75){
            System.out.println("You passed with Grade C!");
        }else{
            System.out.println("You got Grade F, try again next time!");
        }

        scanner.close();
    }
}
