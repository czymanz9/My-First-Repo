public class logicalOperatorsCADM {
    public static void main(String[] args) {
        // Logical Operators
        int x = 7;
        int y = 15;

        if (x == 5 && y == 10) {
            System.out.println("x = 5 and y = 10");
        } else if (x == 5 || y == 10) {
            System.out.println("x = 5 or y = 10");
        } else if (!(x > 5)) {
            System.out.println("x is not greater than 5");
        } else if (!(y < 10)) {
            System.out.println("y is not less than 10");
        } else {
            System.out.println("Error");
        }

        // Loan Eligibility
        int creditScore = 700;
        int annualIncome = 50000;

        if (creditScore > 700 && annualIncome > 50000) {
            System.out.println("You are eligible for the loan");
        } else {
            System.out.println("You are not eligible for the loan");
        }
    }
}
