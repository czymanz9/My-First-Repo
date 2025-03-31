//package JavaProjects.10_StudentManagementSystem;

import java.util.Scanner;

public class StudentManagementSystemCADM {

    //constructor
    public void welcomeRemarks(){
        // Welcome Remarks
        System.out.println("Welcome to the Student Management System");
        System.out.println("\n" + "1. Add Student \r\n" + "2. View All Students \r\n" + "3. Update Student Grade \r\n" + "4. Exit");
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        //object
        StudentManagementSystemCADM managementSystem = new StudentManagementSystemCADM();

        //Call welcome
        managementSystem.welcomeRemarks();

        // user input
        System.out.print("Enter your choice: ");
        int userChoice = scanner.nextInt();
    }
}
