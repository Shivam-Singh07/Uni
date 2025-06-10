import java.util.*;
public class helloWorld {

    public static void main(String[] args) {
        System.out.println("Hello World");

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if(n < 1)
        {
            System.out.println("Not Prime");
        }
        for(int i = 2;i<n/2;i++)
        {
            if(n % i == 0)
            {
                System.out.println("Not Prime");
                break;
            }
            else
            {
                System.out.println("Prime");
                break;
            }
        }
    }
}