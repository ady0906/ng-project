const express   = require("express");
const server    = express();
const path        = require('path');

server.listen(3000, function() {
    console.log("Server listening on localhost:3000");
});

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});
