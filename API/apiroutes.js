const router = require('express').Router();
const notes = require('../db/db.json')


// Need API calls (GET, POST, DELETE)

router.get("/api/notes", (req, res) => {
    res.json(notes)
})

// Pushing data to array
router.post("/api/notes", (req, res) => {
    const newNote = req.body
    notes.push(newNote)
    console.log(notes)
    res.json(notes)
})


module.exports = router;

