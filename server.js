
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

var notes = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });

  app.post("/api/tables", function(req, res) {
    var note = req.body;
    console.log(note);
    characters.push(note);
    res.json(note);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });