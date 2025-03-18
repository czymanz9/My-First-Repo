public class assignmentOperatorsCADM {
    public static void main(String[] args) {
        int x = 10;
        x += 5;
        System.out.println("x += 5 = " + x);
        x -= 3;
        System.out.println("x -= 3 = " + x);
        x *=2;
        System.out.println("x *= 2 = " + x);
        x /= 4;
        System.out.println("x /= 4 = " + x);
        x %= 3;
        System.out.println("x %= 3 = " + x);

        //Discounts
        int price = 100;
        price *= 0.8; // 20% discount
        price *= 1.1; // 10% tax
        System.out.println("Final Price: " + price);
    }
}
