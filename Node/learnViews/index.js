const express = require('express');

const app = express();


// const pet = ['dog', 'cat', 'cow'];
// app.get('/', (req, res)=>{
//     res.send(`<h1>chal rha hai kya</h1>
//         <ul>
//         ${pets.map((pet) => `<li>${pet}</li>`)}
//         </ul>`);

// } )


app.set('view engine', 'ejs');

app.get('/', (req, res)=> res.render("index"))

app.listen(3000, ()=>{
    console.log("chal rha hai😎.")
});