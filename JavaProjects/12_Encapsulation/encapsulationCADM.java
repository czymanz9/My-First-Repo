//package JavaProjects.12_Encapsulation;
class Student{
    private String name;
    private int age;

    public Student() {
        // Default constructor
    }
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        } else {
            System.out.println("Age must be positive.");
        }
    }
}
public class encapsulationCADM {

    public void displayInfo(String name, int age){
        //Accessing w/ getter methods
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
    public static void main(String[] args){
         //object
        encapsulationCADM capsule = new encapsulationCADM();
        Student student = new Student();

        student.setName("John");
        student.setAge(20);

        capsule.displayInfo(student.getName(), student.getAge());
    }
}
