//package JavaProjects.11_Employee Payroll Management System;
import java.util.ArrayList;
import java.util.Scanner;

class Employee{
    String name;
    int employeeID;
    double salary;
    String department;

    public Employee(String name, int employeeID, double salary, String department){
        this.name = name;
        this.employeeID = employeeID;
        this.salary = salary;
        this.department = department;
    }
}

public class employeePayroll{
    ArrayList<Employee> employees = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);

    //user choices
    public int userChoices() {
        System.out.println("\n1. Add Employee");
        System.out.println("2. View All Employees");
        System.out.println("3. Calculate Annual Salary");
        System.out.println("4. Give Salary Raise");
        System.out.println("5. Exit");
        System.out.print("\nEnter your choice: ");
        return scanner.nextInt();
    }

    //Add Employee to the array w/ success message
    public void addEmployee() {
        scanner.nextLine();
        System.out.print("Enter employee name: ");
        String name = scanner.nextLine();
        System.out.print("Enter employee ID: ");
        int employeeID = scanner.nextInt();
        System.out.print("Enter employee salary: ");
        double salary = scanner.nextDouble();
        scanner.nextLine();
        System.out.print("Enter employee department: ");
        String department = scanner.nextLine();

        employees.add(new Employee(name, employeeID, salary, department));
        System.out.println("Employee added successfully!");
    }

    //View Employees, displays all employees in the arrayList with their details
    public void viewEmployees() {
        System.out.println("--- Employees Records ---");

        for (int i = 0; i < employees.size(); i++) {
            Employee employee = employees.get(i);
            System.out.println("\nEmployee " + (i + 1) + ":");
            System.out.println("Name: " + employee.name);
            System.out.println("ID: " + employee.employeeID);
            System.out.println("Salary: $" + employee.salary);
            System.out.println("Department: " + employee.department);
        }
    }

    //Calculate Annual Salary, calculates the annual salary of an employee based on the ID that was inputted by the user
    public void annualSalary() {
        System.out.print("Enter employee ID to calculate annual salary: ");
        int employeeID = scanner.nextInt();
        for (Employee employee : employees) {
            if (employee.employeeID == employeeID) {
                double annualSalary = employee.salary * 12;
                System.out.println("Annual Salary of " + employee.name + ": $" + annualSalary);
                return;
            }
        }
        System.out.println("Employee not found!");
    }

    //Give Salary Raise, gives a salary raise to an employee based on the ID that was inputted by the user
    public void salaryRaise() {
        System.out.print("Enter employee ID to raise salary: ");
        int employeeID = scanner.nextInt();
        for (Employee employee : employees) {
            if (employee.employeeID == employeeID) {
                System.out.print("Enter percentage increase: ");
                int raise = scanner.nextInt();
                employee.salary += employee.salary * raise / 100;;
                System.out.println("Salary raised successfully! New Salary: $" + employee.salary);
                return;
            }
        }
        System.out.println("Employee not found!");
    }

    //-------MAIN-----------
    public static void main(String[] args){
        employeePayroll payroll = new employeePayroll();
        System.out.println("Welcome to the Employee Payroll Management System");

        boolean exit = false;
        while (!exit) {
            int choice = payroll.userChoices();

            switch (choice) {
                case 1:
                    payroll.addEmployee();
                    break;
                case 2:
                    payroll.viewEmployees();
                    break;
                case 3:
                    payroll.annualSalary();
                    break;
                case 4:
                    payroll.salaryRaise();
                    break;
                case 5:
                    exit = true;
                    System.out.println("Exiting the program...");
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }
}