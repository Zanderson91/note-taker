const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;


//initiate first call to use the app. Links to public folder.
app.use(express.static('public'));
//initiates second call to use data in JSON format
app.use(express.json());

app.use(require('./API/apiroutes'));

//establish beginning html file (index.html)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//establish notes html file and where it's hosted (notes.html)
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});




app.listen(PORT, function() {
    console.log ("Listening on PORT" + PORT);
});


