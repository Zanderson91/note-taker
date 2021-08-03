const router = require('express').Router();
let notes = require('../db/db.json')
const fs = require('fs');
let uuid = require('uuid');
let {
    v4: uuidv4
} = require('uuid');
uuidv4();



// Need API calls (GET, POST, DELETE)

router.get("/api/notes", (req, res) => {
    res.json(notes)
});

// Pushing data to array
//UUID created for each new post and allows for better sorting
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
//After UUID is created the delete call filters results by note id and deletes the corresponding file.
router.delete("/api/notes/:id", (req, res) => {
            const id = req.params.id;
            let filterNotes = notes.filter(note => note.id != id)
            notes = filterNotes;
            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(filterNotes), function (err) {
                if (err) throw err
            })
            res.end();
        })



module.exports = router