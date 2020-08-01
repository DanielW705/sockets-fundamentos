let socket = io();
socket.on("connect", () => {
  console.log("Conectado al servido");
});
// Escuchar sucesos
socket.on("disconnect", () => {
  console.log("Y se marcho");
});
// Enviar informacion o emitir
socket.emit(
  "enviarMensaje",
  {
    usuario: "Daniel",
    mensaje: "Hola mundo",
  },
  (res) => {
    console.log({ res });
  }
);
// Escuchar informacion
socket.on("enviarMensaje", (message) => {
  console.log(message);
});
