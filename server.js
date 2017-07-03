var express = require("express");
var path = require("path");
var compression = require("compression");

var app = express();

app.use(compression());

app.use("/css", express.static(__dirname + "/src/css"));
app.use("/img", express.static(__dirname + "/src/img"));
app.use("/js", express.static(__dirname + "/src/js"));


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/index.html"));
});

// app.use(function(req, res) {
//     res.status(404);
//     res.sendFile(path.join(__dirname + "/src/404.html"));
// });

app.listen(3000, function () {
    console.log("server.js successfully running!");
});
