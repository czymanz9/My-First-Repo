import java.util.Scanner;

public class StudentGradesAnalyzer {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //user input
        System.out.print("Enter the number of students: ");
        int numStudents = scanner.nextInt();

        //array
        int[] grades = new int[numStudents];
        for(int i = 0; i < numStudents; i++){
            System.out.print("Enter the grade for student " + (i+1) + ": ");
            grades[i] = scanner.nextInt();
        }

        //for-each
        int totalGrades = 0;
        int highestGrade = 0;
        int lowestGrade = 100;
        for(int grade : grades){
            totalGrades += grade;

            //for highest grade
            if(grade > highestGrade){
                highestGrade = grade;
            }
            
            //for lowest grade
            if(grade < lowestGrade){
                lowestGrade = grade;
            }
        }

        //Print
        System.out.println("\n=== Grade Analysis ===  ");
        System.out.println("Total Grades: " + totalGrades);
        System.out.println("Average: " + (totalGrades / numStudents));
        System.out.println("Highest Grade: " + highestGrade);
        System.out.println("Lowest Grade: " + lowestGrade);
    }
}
