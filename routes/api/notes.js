// routes/api/notes.js

const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');

// GET /api/notes
router.get('/', notesController.getNotes);

// POST /api/notes
router.post('/', notesController.addNote);

module.exports = router;
