public class lec2_basic_main_class 
{
    public static void main(String[] args) 
    {
        tree bt =  new tree();
        bt.BinaryTree();    
        //bt.display();
        // 10 true 20 false true 30 false false true 40 false false
        //System.out.println(bt.max());
        System.out.println(bt.find(40));
    }
}
