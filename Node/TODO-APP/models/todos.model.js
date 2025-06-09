const fs = require('fs/promises');
const path = require('path');

const todosdb = path.join(__dirname, 'todos.json'); // Ensure it's a JSON file

class Todo {
    static addTodo = async (name, type, status) => {
        try {
            // Read existing todos
            let todos = [];
            try {
                const data = await fs.readFile(todosdb, 'utf-8');
                todos = JSON.parse(data);
            } catch (err) {
                // If file doesn't exist or is empty, initialize as an empty array
                if (err.code !== 'ENOENT') throw err;
            }

            // Create new TODO
            const newTODO = {
                id: todos.length + 1,
                name: name,
                type: type,
                status: status,
            };

            todos.push(newTODO);

            // Save updated todos
            await fs.writeFile(todosdb, JSON.stringify(todos, null, 2));

            return newTODO;
        } catch (err) {
            throw err;
        }
    };

    static getTodos = () => {
        return new Promise(async(resolve, reject)=>{
            try{
                const data = await fs.readFile(todosdb);
                const todos = JSON.parse(data);
                resolve(todos)
            }
            catch(err){
                reject(err)
            }
        })
    };

    static updateTodo =  ()=> {
        
    };

    static deleteTodo = ()=> {
        
    };
}

module.exports = Todo;
