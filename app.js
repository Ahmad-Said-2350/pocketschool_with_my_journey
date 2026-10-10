const http = require('http');

//header
const webserver = http.createServer((req,res)=>{
res.writeHead(200,{"content-type":'text/html'});
res.end(
   ' <h1>Hello, World!</h1>'
)


});

// port range
webserver.listen(3000,()=>{
    console.log('Server is running on port 3000');
});