var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

io.on('connection', function(socket){

  socket.join('some room2'); // room var

  socket.on('chat message', function(msg){
    io.to('some room2').emit('chat message', msg); // room var
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
