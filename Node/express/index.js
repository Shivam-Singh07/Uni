//import module

const express = require('express'); // initializing server-creating a server instance

const app = express();

app.use('/', (req, res) =>{
    res.send('Hello jiii😎')
})

//Starting a Server

app.listen(3000, ()=>{
    console.log('Chal gaya');
    
})