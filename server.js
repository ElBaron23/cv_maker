var http = require('http');
let port = 80;
let hostname = "localhost";
let server = http.createServer((request,response)=>{
    response.writeHead(200,"ok",{"Content-Type":"text/html;charset=utf-8"});
    response.write("<h1> im imad</h1>");
    response.end();
});

server.listen(port,hostname,()=>{
    console.log("http//"+hostname+":"+port);
});