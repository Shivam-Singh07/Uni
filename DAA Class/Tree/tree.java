import java.rmi.MarshalException;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

import org.w3c.dom.Node;
public class tree 
{

    class node
    {
        int val;
        node left;
        node right;
    }
    private node root;

    public void BinaryTree()
    {
        root = ConstructTree();
    }

    Scanner sc = new Scanner(System.in);
    public node ConstructTree()
    {
        int item = sc.nextInt();
        node nn = new node();
        nn.val = item;

        Boolean hlc = sc.nextBoolean();
        if(hlc)
        {
            nn.left = ConstructTree();
        }

        Boolean hrc = sc.nextBoolean();
        if(hrc)
        {
            nn.right = ConstructTree();
        }
        return nn;
        
    }

    public void display()
    {
        display(root);
    }

    private static void display(node Node)
    {
        String s = "";
        s = s + Node.val;
        s = "<-" + s + "->";
        
        if(Node.left != null)
        {
            s = Node.left.val + s;
        }
        else
        {
            s = "."+s;
        }

        if(Node.right != null)
        {
            s = s + Node.right.val;
        }
        else
        {
            s = s +".";
        }
        System.out.println(s);
        display(Node.left);
        display(Node.right);
    }

    public boolean find(int item){
        return find(root, item);
       }
       private boolean find(node Node, int item){
   
         if(Node==null){
           return false;
         }
         if(Node.val==item){
           return true;
         }
         boolean left=find(Node.left,item);
         boolean right=find(Node.right, item);
   
         return left||right;
       }

    public int max()
    {
        return max(root);
    }
    private int max(node Node)
    {
        if(Node == null)
        {
            return Integer.MIN_VALUE;
        }
        int left = max(Node.left);
        int right = max(Node.right);

        return Math.max(Math.max(left, right), Node.val);
    }


    
}