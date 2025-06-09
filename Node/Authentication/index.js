const express = require('express');
const mongoose = require('mongoose')

const app = express();
const URI = 'localhost:27017/testecom';
const User = require('./models/user.model')

//POST / Register

app.post('/register', async (req, res)=>{

    const newUser = req.body;

    try
    {
        await User.create(newUser)
    }
    catch(err)
    {
        console.log(err.message);
        
    }
})

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    try
    {
        const user = await User.findOne({email: email});
        if(!user)
        {
            return res.status(404).send({msg: 'Kindly Register'});
        }
        if(user.password != password))
        {
            return res.status(401).send({msg: 'Password mismatched'});
        }
    }
    catch(err)
    {
        res.status(500).send({msg: 'err.message'});
    }
})

function isAuthenticated(req, res, next)
{
    
}

app.get('/profile', (req, res) => {

    res.send('welcome')
})

async function dbconnection(){
    try
    {
        await mongoose.connect(URI);
    }
    catch(err)
    {
        console.log(err.message);
    
    }
}





app.listen(3000, ()=>{
    console.log('Working 😎');
    
})
