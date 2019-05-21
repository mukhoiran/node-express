var http = require('http');
var fs = require('fs');

function handleRequest(req, res){
  // directyly return text
  // res.end('Welcome in NodeJS');

  // return in HTML
  res.writeHead(200, {'Content-Type':'text/html'});
  fs.readFile('./index.html', null, function(error, data){
    if(error){
      res.writeHead(404);
      res.write('File not Found!');
    }else{
      res.write(data);
    }

    res.end();
  });
}

var server = http.createServer(handleRequest);

server.listen(3000, function(){
  console.log('running on port 3000');
});
