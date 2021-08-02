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
    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err
    })
    res.end();
    console.log("Saved!")
});

//API delete call to remove saved JSON
router.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let deleteNotes = notes.filter(note => note.id != id)
    notes = deleteNotes

    fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err
    })
    res.end();
})




module.exports = router;