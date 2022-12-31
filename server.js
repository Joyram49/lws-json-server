const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const data = require("./db.js");

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
