const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, updatedNote, deleteNote } = require('../controllers/notes.controller');

router.route('/')
    //.get((req,res) => res.send('Notes Routes')) //enviar un texto
    .get(getNotes) //enviar un json
    .post(createNote);
    //.put()//actualiza toda la nota
    //.patch() //actualiza solo una propiedad de una nota

router.route('/:id')
    .get(getNote)
    .put(updatedNote)
    .delete(deleteNote);

module.exports = router;