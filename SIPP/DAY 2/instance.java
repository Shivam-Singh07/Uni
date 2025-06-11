abstract class car
{
    public abstract void safe();
}
class volvo extends car
{
    public void safe()
    {
        System.out.println("Most safe car.");
    }
}

class instance
{
    public static void main(String[] args) 
    {
        car c = new volvo();
        c.safe();
        System.out.println(c instanceof volvo);
    }
}