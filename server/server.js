const express = require("express");
const SocketIO = require("socket.io");
const http = require("http");
const path = require("path");
const app = express();
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 8080;

app.use(express.static(publicPath));
// Inizializado de los sockets y realizando la comunicacion del back end
module.exports.io = SocketIO(server);
require("./sockets/sockets");

server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
