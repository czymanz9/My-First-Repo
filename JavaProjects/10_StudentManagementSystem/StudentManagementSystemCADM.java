//package JavaProjects.10_StudentManagementSystem;

import java.util.ArrayList;
import java.util.Scanner;
class Student {
    String name;
    int id;
    double grade;

    //constructor
    public Student(String name, int id, double grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
}

public class StudentManagementSystemCADM {
    String schoolName = "University of Santo Tomas-Paris";
    ArrayList<Student> students = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);

    //user choices
    public int userChoices() {
        System.out.println("\n1. Add Student");
        System.out.println("2. View All Students");
        System.out.println("3. Update Student Grade");
        System.out.println("4. Exit");
        System.out.print("Enter your choice: ");
        return scanner.nextInt();
    }

    // Add Student, user inputs details and is stored in the arrayList w/ confirmation message that it was successfully added
    public void addStudent() {
        scanner.nextLine();
        System.out.print("Enter student name: ");
        String name = scanner.nextLine();
        System.out.print("Enter student ID: ");
        int id = scanner.nextInt();
        System.out.print("Enter student grade: ");
        double grade = scanner.nextDouble();

        students.add(new Student(name, id, grade));
        System.out.println("Student added successfully!");
    }

    // View Students, displays all students in the arrayList with their details
    public void viewStudents() {
        System.out.println("--- Student Records ---");
        System.out.println("School: " + schoolName);

        for (int i = 0; i < students.size(); i++) {
            Student student = students.get(i);
            System.out.println("\nStudent " + (i + 1) + ":");
            System.out.println("Name: " + student.name);
            System.out.println("ID: " + student.id);
            System.out.println("Grade: " + student.grade);
        }
    }

    // Update Grade, updates the grade of a student based on the ID that was inputted by the user
    public void updateGrade() {
        System.out.print("Enter student ID to update: ");
        int id = scanner.nextInt();

        for (Student student : students) {
            if (student.id == id) {
                System.out.print("Enter new grade: ");
                student.grade = scanner.nextDouble();
                System.out.println("Grade updated successfully!");
                return;
            }
        }
        System.out.println("Student ID not found.");
    }

    //----------------Main--------------
    public static void main(String[] args) {
        StudentManagementSystemCADM managementSystem = new StudentManagementSystemCADM();
        System.out.println("Welcome to the Student Management System");

        boolean exit = false;
        while (!exit) {
            int choice = managementSystem.userChoices();

            switch (choice) {
                case 1:
                    managementSystem.addStudent();
                    break;
                case 2:
                    managementSystem.viewStudents();
                    break;
                case 3:
                    managementSystem.updateGrade();
                    break;
                case 4:
                    System.out.println("Exiting program...");
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }
        }
    }
}
