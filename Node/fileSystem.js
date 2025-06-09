const path = require('path');
const fs = require('fs');
path.join(__firname, 'text.txt');
fs.writeFile('text.txt', "Hell World", (err, data) => {
    if(err){
        console.log(err);
        
    }
    console.log(data);
    
}) 