// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);

// server.listen(1337);

// app.use(express.static(__dirname + "/../client"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/../client/index.html");
// });
const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Serve static files from client folder
app.use(express.static(__dirname + "/../client"));
app.use(express.static(__dirname + "/../client/public")); // <-- add this line


// Serve index.html on root request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});
