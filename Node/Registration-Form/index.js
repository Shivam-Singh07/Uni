const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index'); 
});

app.post('/create', (req, res)=>{
    const{name, email, gender} = req.body;
    res.render('result',{name, email, gender});
    
})

app.listen(3000, ()=>{
    console.log('chal rha hai😎');
    
})