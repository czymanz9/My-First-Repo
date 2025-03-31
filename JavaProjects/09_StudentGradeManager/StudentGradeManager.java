import java.util.Scanner;

public class StudentGradeManager {

    /* Calculates the students average */
    public double AverageGrade(int grade1, int grade2, int grade3) {
        double average = (grade1 + grade2 + grade3) / 3.0;
        return average;
    }

    /* Overload Average Calculation */
    public double AverageGrade(int grade1, int grade2, int grade3, int grade4) {
        double average = (grade1 + grade2 + grade3 + grade4) / 4.0;
        return average;
    }

    /* Grade Classification */
    public String gradeClass(double average){
        if( average > 89){
            return "Excellent";
        } else if (average >= 80) {
            return "Good";
        } else if (average >= 70    ) {
            return "Average";
        } else {
            return "Needs Improvement";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // user input
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();
        System.out.print("Enter 4 grades: ");
        int grade1 = scanner.nextInt();
        int grade2 = scanner.nextInt();
        int grade3 = scanner.nextInt();
        int grade4 = scanner.nextInt();

        // object
        StudentGradeManager manager = new StudentGradeManager();

        // method
        double average = manager.AverageGrade(grade1, grade2, grade3, grade4);
        String classification = manager.gradeClass(average);

        // Prints
        System.out.println("Student: " + studentName);
        System.out.println("Grades: " + grade1 + "," + grade2 + "," + grade3 + "," + grade4);
        System.out.printf("Average: %.1f%n", average);
        System.out.println("Classification: "+ classification);

        // close scanner
        scanner.close();
    }
}
