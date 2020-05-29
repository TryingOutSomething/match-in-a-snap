const app = require("./server");
const config = require("./configs/server-config");
const database = require("./db/index");

database.connect();

app.listen(config.express.port, config.express.ip, (error) => {
  if (error) {
    console.error("Unable to listen for connections", error);
    process.exit(10);
  }

  console.log(`Server started on ${config.express.ip}:${config.express.port}`);
});
