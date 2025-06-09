const exp = require('constants');
const express = require('express');
const app = express();
app.use(express.json()); // application level middleware
const users = [];

app.post('/users', (req, res)=>{

    //extrct user data req
    const { name, age, email, phone, password } = req.body; //object de
    

    //data validation
    if(!email || !password)
    {
        res.status(404).send({message: 'Enter all reuired information'})
    }

    //add data to database
    
    users.push(req.body);

    //send appropriate response
    res.status(201).send({users:users, message: "Done"});

    console.log(req.body);
    res.send('welcome');
})



app.listen(3000, ()=>{
    console.log('Chalu ho gya😎');
})