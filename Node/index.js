const http = require("http");
const server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text/plain'});
    response.end('Hello Duniya😎');
});

server.listen(3000, ()=>{
    console.log('Srver staredd successfully on PORT 3000');
    
})