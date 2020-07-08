const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req,res) => {
    const notes = await Note.find(); // retorna un arreglo de notas [{},{},{}]
    res.json(notes);
};

notesCtrl.createNote = async (req,res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    await newNote.save(); //guarda una nueva nota en mongodb
    res.json({message: 'Note saved'});
}

notesCtrl.getNote = async (req,res) => {
    //console.log(req.params.id)
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.updatedNote = async (req,res) => {
    //Note.findByIdAndUpdate(req.params.id, req.body); //enviar el objeto completo
    const { title, content, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        date,
        author
    });
    res.json({message: 'Note updated'})
};

notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note deleted'})
};

module.exports = notesCtrl;