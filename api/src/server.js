const http = require("http");
const { config } = require("dotenv");

config();

const app = require("./app");

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

async function starServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

starServer();
