const router = require('express').Router();
const notes = require('../db/db.json')
const fs = require('fs');
const uuid = require('uuid');
const {
    v4: uuidv4
} = require('uuid');
uuidv4();



// Need API calls (GET, POST, DELETE)

router.get("/api/notes", (req, res) => {
    res.json(notes)
});

// Pushing data to array
router.post("/api/notes", (req, res) => {
    const newNote = req.body
    newNote.id = uuid
    notes.push(newNote)
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), function(err) {
        if (err) throw err
    })
    res.end();
        console.log("Saved!")
    });






module.exports = router;

