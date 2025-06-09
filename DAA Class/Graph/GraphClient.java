import java.util.HashSet;

public class GraphClient 
{
    public static void main(String[] args) 
    {
        graph gr = new graph(7);
        gr.addEdge(1, 2, 3);
        gr.addEdge(1, 4, 2);
        gr.addEdge(2, 3, 4);
        gr.addEdge(3, 4, 10);
        // gr.addEdge(1, 5, 5);
        gr.addEdge(5, 6, 9);
        gr.addEdge(5, 7, 12);
        gr.addEdge(6, 7, 6);
        gr.display();
        // gr.PrintAllPath(1, 7, new HashSet<>(), null);
        //System.out.println(gr.BFS(1, 6));
        // System.out.println(gr.DFS(1,5));
        gr.BFT();

    }    
}
