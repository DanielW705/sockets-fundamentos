const { io } = require("../server");
io.on("connection", (client) => {
  console.log("Usuario conectado");
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
  // Escuchar el emit
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    client.broadcast.emit("enviarMensaje", data);
    // if (mensaje.usuario) {
    //   callback({
    //     respuesta: "Todo salio Bien",
    //   });
    // } else {
    //   callback({
    //     respuesta: "Todo salio Mal",
    //   });
    // }
  });
  // Enviar un emit
  client.emit("enviarMensaje", {
    usuario: "Administrador",
    mensaje: "Bienvienido",
  });
});
