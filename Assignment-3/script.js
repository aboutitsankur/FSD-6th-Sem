const http=require('http');
const fs=require('fs');
const home= fs.readFileSync("index.html","utf-8");
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(home);
    // console.log('server1');
    // res.end('Hi this is my first server');
});

server.listen(7000,()=>{
    console.log('server is running');
})