var mysql = required('mysql')
var io = module.exports.io = require('socket.io')(app)

const PORT = process.env.PORT || 3211

const SocketManager = require('./SocketManager')

io.on('connection' , SocketManager)

app.listen(PORT, ()=>{
  console.log("connected to port:" + PORT);
})
