// controller/api/notes.js

const Note = require('../models/note');

// GET /api/notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id }); // Assuming you have implemented user authentication and have access to the logged-in user's ID
    res.json(notes);
  } catch (error) {
    console.error('Error retrieving notes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST /api/notes
exports.addNote = async (req, res) => {
  try {
    const { text } = req.body;
    const newNote = new Note({
      text,
      user: req.user._id, // Assuming you have implemented user authentication and have access to the logged-in user's ID
    });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
