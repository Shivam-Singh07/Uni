const express = require('express')
const app = express();
const Todo = require('./models/todos.model')


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))

/**
 * TODO 1: GET base View
 * 
*/

app.get('/', async(req, res)=>{
    try{

        const todos = await Todo.getTodos();
        res.render('index', {todos});
    }
    catch
    {
        res.status(500).send({message: err.message})
    }
})

app.get("/addTodo", (req, res) => res.render("addTodo"));

/**
 * TODO2: APIs that deal with TODO creation*/

app.post('/todos', async(req, res)=>{
    try{
        const {name, type, status} = req.body;
        //Additon to database
        await Todo.addTodo(name, type, status);
        //send response
        res.status(201).send({message: 'Todo added'})
    }
    catch(err){

        res.status(500).send({message: err.message});

    }
})

app.patch('/todos/:id', (req, res)=>{
    const {status} = req.body;
    const{id} = req.params;
    //await Todo.updateTodo(id, status);
})
    

app.listen(3000, ()=>{
    console.log('chal rha hai 😎.')
})