public class relationalOperatorsCADM {
    public static void main(String[] args){
        int x = 10;
        int y = 20;

        System.out.println("x == y: " + (x == y));
        System.out.println("x != y: " + (x != y));
        System.out.println("x > y: " + (x > y));
        System.out.println("x < y: " + (x < y));
        System.out.println("x >= y: " + (x >= y));
        System.out.println("x <= y: " + (x <= y));

        if (5 <= x  &&  x <= 20){
            System.out.println("x is within the range of 10 and 20");
        }
    }
}
