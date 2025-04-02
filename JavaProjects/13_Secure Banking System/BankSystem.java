//package JavaProjects.13_Secure Banking System;
import java.util.ArrayList;
import java.util.Scanner;

class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private ArrayList<String> transactions = new ArrayList<>();
    private static final double INTEREST_RATE = 0.05;

    public BankAccount(String accountNumber, String accountHolder, double balance) {
        this.setAccountNumber(accountNumber);
        this.setAccountHolder(accountHolder);
        this.setBalance(balance);
        transactions.add("Deposit $" + balance);
    }

    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Setters with validation
    public void setAccountNumber(String accountNumber) {
        if (accountNumber.matches("\\d{10}")) {
            this.accountNumber = accountNumber;
        } else {
            System.out.println("Invalid account number. Must be 10 digits.");
        }
    }

    public void setAccountHolder(String accountHolder) {
        if (accountHolder != null && !accountHolder.isEmpty()) {
            this.accountHolder = accountHolder;
        } else {
            System.out.println("Account holder name cannot be empty.");
        }
    }

    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Balance cannot be negative.");
        }
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            transactions.add("Deposit $" + amount);
            System.out.println("Deposit successful. New Balance: $" + balance);
        } else {
            System.out.println("Deposit amount must be greater than 0.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            transactions.add("Withdraw $" + amount);
            System.out.println("Withdrawal successful. New Balance: $" + balance);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds.");
        }
    }

    public void applyInterest() {
        double interest = balance * INTEREST_RATE;
        balance += interest;
        transactions.add("Interest Applied: $" + interest);
        System.out.println("Interest applied. New Balance: $" + balance);
    }

    public void showDetails() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
    }

    public void showTransactions() {
        System.out.println("--- Transaction History ---");
        for (String transaction : transactions) {
            System.out.println("- " + transaction);
        }
    }
}

public class BankSystem {
    private Scanner scanner = new Scanner(System.in);
    private BankAccount account;

    //User Choices
    public int userChoices() {
        System.out.println("\n1. Create Account");
        System.out.println("2. View Account Details ");
        System.out.println("3. Deposit Money");
        System.out.println("4. Withdraw Money");
        System.out.println("5. Apply Interest");
        System.out.println("6. View Transaction History");
        System.out.println("7. Exit ");
        System.out.print("\nEnter your choice: ");
        return scanner.nextInt();
    }

    //Create Account
    public void createAcc() {
        scanner.nextLine();
        System.out.print("Enter Account Number: ");
        String accNum = scanner.nextLine();
        System.out.print("Enter Account Holder Name: ");
        String accHolder = scanner.nextLine();
        System.out.print("Enter Initial Deposit: ");
        double deposit = scanner.nextDouble();
        account = new BankAccount(accNum, accHolder, deposit);
        System.out.println("Account created successfully!");
    }

    //View Acc Details
    public void viewAccDetails() {
        if (account != null) account.showDetails();
        else System.out.println("No account found.");
    }

    //Deposit
    public void depositMoney() {
        if (account != null) {
            System.out.print("Enter deposit amount: ");
            account.deposit(scanner.nextDouble());
        } else System.out.println("No account found.");
    }

    //Withdraw
    public void withdrawMoney() {
        if (account != null) {
            System.out.print("Enter withdrawal amount: ");
            account.withdraw(scanner.nextDouble());
        } else System.out.println("No account found.");
    }

    //Apply Interest
    public void applyInterest() {
        if (account != null) account.applyInterest();
        else System.out.println("No account found.");
    }

    //View Transaction History
    public void viewHistory() {
        if (account != null) account.showTransactions();
        else System.out.println("No account found.");
    }
    //-------------------------------MAIN-------------------------------------------
    public static void main(String[] args) {
        BankSystem bankingSys = new BankSystem();
        System.out.println("Welcome to the Secure Banking System");

        boolean exit = false;
        while (!exit) {
            int choice = bankingSys.userChoices();

            switch (choice) {
                case 1:
                    bankingSys.createAcc();
                    break;
                case 2:
                    bankingSys.viewAccDetails();
                    break;
                case 3:
                    bankingSys.depositMoney();
                    break;
                case 4:
                    bankingSys.withdrawMoney();
                    break;
                case 5:
                    bankingSys.applyInterest();
                    break;
                case 6:
                    bankingSys.viewHistory();
                    break;
                case 7:
                    System.out.println("Exiting program...");
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a valid option.");
            }
        }
    }
}