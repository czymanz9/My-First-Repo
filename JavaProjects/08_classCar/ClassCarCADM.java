public class ClassCarCADM {
    public void displayInfo(String brand, int year){
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
    }

    public static void main(String[] args){
        ClassCarCADM car = new ClassCarCADM();
        car.displayInfo("Toyota", 2020);
    }
}
