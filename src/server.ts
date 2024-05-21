import { Server } from "http";
import app from "./app";
import config from "./app/config";
const port = config.port;
let server: Server;
const mainServer = async () => {
  server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

//Server Closed
const serverClosed = () => {
  if (server) {
    server.close(() => {
      console.info("Server closed");
    });
  }
  process.exit(1);
};

//
process.on("uncaughtException", (err) => {
  console.log(err);
  serverClosed();
});

//
process.on("unhandledRejection", (err) => {
  console.log(err);
  serverClosed();
});
mainServer();
